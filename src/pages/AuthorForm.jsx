import { FaUserCircle } from 'react-icons/fa'
import { useRef } from 'react'
import axios from 'axios'
import NavBar from '../components/Navbar'
import apiUrl from '../../api'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
// Importacion de credenciales para conectar con la nube
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

const AuthorForm = () => {
  let urlImg;

  let name = useRef()
  let last_name = useRef()
  let city = useRef()
  let date = useRef()
  let photo = useRef()
  const navigate = useNavigate()

  // Funcion para guardad la informacion en la base de datos (Firestore)
const saveInfo = async(e) => {
  e.preventDefault()
  const authInfo = {
    name: name.current.value,
    last_name: last_name.current.value,
    image: urlImg
  }
  // Enviar informacion guardada
  try {
    // Definir el nombre de la coleecion en la instancia que definimos antes
    // Añadir el documento a la coleccion
    await addDoc(collection(db, 'AuthorInfo'), {
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
  const refFile = ref(storage, `authorDocs/${imgFile.name}`)
  // Cargar o subir el archivo con la imagen
   await uploadBytes(refFile, imgFile)
  // Obtener la url de la imagen y definirla en la variable "urlImg" que se inicializó antes
  urlImg = await getDownloadURL(refFile)
}

  function createAuthor (e){
    e.preventDefault()
    let url = apiUrl+'authors/author-form'
    let token = localStorage.getItem('token')
    let user = JSON.parse(localStorage.getItem('user'))
    let headers = {headers:{'Authorization':`Bearer ${token}`}}
    let data ={
      name: name.current.value,
      last_name: last_name.current.value,
      city: city.current.value,
      date: date.current.value,
      photo: urlImg,
      active: 'true',
      user_id: user.id
    }
    axios.post(url,data,headers)
      .then(res=>{
        console.log(res)
        Swal.fire(
          `"${res.data.name.charAt(0).toUpperCase()}${res.data.name.slice(1)}" Your role has changed`,
          )
          navigate('/')
      })
      .catch(err => {
        console.log(err)
        Swal.fire(
          { icon:'error',
            title:"Failed to create the author ",
            text:err.response.data.error || err.response.data.message
          }
          )
      })
  }

  async function handleSubmit(e){
    e.preventDefault()
    createAuthor(e)
    saveInfo(e)
  }
  return (
    <>
    <NavBar className=""/>
    <div className='grid place-items-center w-[100vw] h-[90vh] bg-black text-white | xl:h-[90vh] | 2xl:h-[90vh] 2xl:py-16'>
      <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center h-[100%] w-[100%] gap-8 | md:w-[75%] | lg:w-[60%] | xl:gap-10 | 2xl:justify-between '>
        <h1 className='text-3xl | xl:text-5xl'>New Author</h1>
        <FaUserCircle className='text-6xl | xl:text-8xl'/>
        <input type="text" ref={name} placeholder='Name' className='w-[65%] bg-transparent outline-none pl-3 border-b-[3px] border-b-white/50 | xl:text-3xl'/>
        <input type="text" ref={last_name} placeholder='Last Name' className='w-[65%] bg-transparent outline-none pl-3 border-b-[3px] border-b-white/50 | xl:text-3xl'/>
        <input type="text" ref={city} placeholder='Location'  className='w-[65%] bg-transparent outline-none pl-3 border-b-[3px] border-b-white/50 | xl:text-3xl'/>
        <input type="date" ref={date} className='w-[65%] bg-transparent outline-none pl-3 border-b-[3px] border-b-white/50 text-white | xl:text-3xl' />
        <input type="file" ref={photo} className='w-[65%] bg-transparent outline-none pl-3 border-b-[3px] border-b-white text-white/50 | xl:text-3xl' onChange={fileHandler}/>
        <button type='submit' className='bg-slate-100 text-black font-bold cursor-pointer w-[65%] text-center py-3 rounded-3xl | lg:w-[35%] lg:mt-2 | xl:text-3xl'>Send</button>
      </form>
    </div>
    </>
  )
}

export default AuthorForm