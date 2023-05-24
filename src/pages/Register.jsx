import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../api'
import Swal from 'sweetalert2'
import 'animate.css';

// Impoertacion de credenciales para conectar con la nube
import credentials from '../credentials.js'

//Importacion de funciones y metodos para acceder a los servicios de Firestore y Storage
import { getFirestore, collection, addDoc } from 'firebase/firestore' 
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

// Definicion de una instancia de Firestore con las credenciales
// db se puede usar para interactuar con las base de datos de Firestore y poder leer, escribir, actualizar, y eliminar datos
const db = getFirestore(credentials)

//Deficion de un instancia de Storage 
// storage se puede usar para interactuar con almacenamiento de la nube y poder cargar o descargar archivos, y gestionar el almacenamiento
const storage = getStorage(credentials)

export default function Register(props) {

  let urlImg;

  let name = useRef()
  let email = useRef()
  let photo = useRef()
  let password = useRef()
  const navigate = useNavigate()

// Funcion para guardad la informacion en la base de datos (Firestore)
const saveInfo = async(e) => {
  e.preventDefault()
  const authInfo = {
    name: name.current.value,
    email: email.current.value,
    image: urlImg
  }
  // Enviar informacion guardada
  try {
    // Añadir el documento a la coleccion
    // Definir el nombre de la coleecion
    await addDoc(collection(db, 'authInfo'), {
    // Enviar el objeto con la información que se desea guardar, pero como un documento nuevo
      ...authInfo
    })
  } catch (error) {
    console.log(error);
  }
}

const fileHandler = async(e) => {
  e.preventDefault()
  // Definicion de una variable que contiene la imagen como archivo
  const imgFile = photo.current.files[0]
  console.log(imgFile);
  // Cargar o subir imgFile al storage en un directorio 
  const refFile = ref(storage, `documents/${imgFile.name}`)
  // Cargar o subir la url de la imagen y el archivo con la imagen
   await uploadBytes(refFile, imgFile)
  // Obtener la url de la imagen y definirla en la variable "urlImg" que se inicializó antes
  urlImg = await getDownloadURL(refFile)
}


function handleForm(e){
  e.preventDefault()
let dataForm = {
  name: name.current.value,
  email: email.current.value,
  photo: urlImg,
  password: password.current.value
  }

  axios.post(apiUrl + 'auth/signup', dataForm)
  .then(res => {console.log(res)
    Swal.fire(
      'Welcome !',
      'You are Registred!',
      'success'
      )
      navigate('/')}
  )
  
  .catch((err) => {
    console.log(err)
    if (err.response.data.message == 'auth already exist') {
      Swal.fire({
        icon: 'error',
        title: 'The email already exists!',
      });}
    Swal.fire({
      icon: 'error',
      title: 'Error Register',
      text: `${err.response.data.message}`,
    })
  });

}

async function handleSubmit(e){
  e.preventDefault()
  handleForm(e)
  saveInfo(e)
}

  return (
   <main className='flex  h-screen w-screen md: items-center animate__animated animate__fadeIn'>
    <img src="./images/registerimg.png" alt="" className='hidden md:block h-[70%] md:w-[70%] lg:h-[100%] '/>
     <div className=': w-[100%] justify-evenly  items-center mdp-8 md:mt-10 flex flex-col  md:w-[30%] md:h-[85%] md:justify-evenly md:items-center'>
      <img src="./images/logo.png" className='w-[140px]' alt="" />
      <h1 className='text-[32px] font-bold'>Welcome!</h1>
      <p className='text-[12px] text-center font-bold text-[#898989]'>Discover manga, manhua and manhwa, track your progress, <br></br> have fun, read manga.</p>
        <form onSubmit={handleSubmit} className=' h-[60vh] justify-evenly  md:text-[12px] flex flex-col  md:h-[50vh] md:w-[24vw] md:justify-around '>
        <div className='w-[100%] flex flex-col'>
        <label htmlFor="name" className='text-[#898989] '>Name</label>
        <input type="text" id='name' className='border-b-[1px] border-[#626161] p-1' ref={name} />
        </div>
        <div className='w-[100%] flex flex-col'>
        <label htmlFor="email" className='text-[#898989] '>Email</label>
        <input type="email" id='email' className='border-b-[1px] border-[#626161] p-1' ref={email} />
        </div>
        <div className='w-[100%] flex flex-col'>
        <label htmlFor="pwd" className='text-[#898989] '>Password</label>
        <input type="password" id='pwd' className='border-b-[1px] border-[#626161] p-1' ref={password} />
        </div>      <div className='w-[100%] flex flex-col'>
        <label htmlFor="ph" className='text-[#898989] '>Photo</label>
        <input type="file" id='ph' className='border-b-[1px] border-[#626161] p-1' ref={photo} onChange={fileHandler}/>
        </div> 
        <div className='w-[100%] flex'>
        <input type="checkbox" id='info' />
        <label htmlFor="info" className='text-[#898989] '>Send notification to my email</label>
        </div>
        
        <button type='submit' className='border border-black w-[250px] h-[48px] rounded-md bg-gradient-to-r from-[#434343] to-[#000] text-white font-bold md:w-[100%]  xl:w-[100%]'>Sing up</button>
        <button type='submit' className='border border-black flex justify-center text-[#898989] font-bold items-center w-[250px] h-[48px] rounded-md md:w-[100%] xl:w-[100%]'><img src="./images/Google.png" className='w-[24px]' alt="" />Sing up with Google</button>
        <p className='text-[12px] text-[#898989]'>already have an account?<span  className='font-bold text-[#FF0000] hover:cursor-pointer' onClick={()=> props.setShow(!props.show)}> Log in</span> </p> 
      </form>
    </div>
   </main>
  )
}