import React from 'react'
import { useRef } from 'react'
import axios from 'axios'
import apiUrl from '../../api'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import 'animate.css';



export default function Register(props) {


  let name = useRef()
  let email = useRef()
  let photo = useRef()
  let password = useRef()
  const navigate = useNavigate()

  function handleForm(e){
    e.preventDefault()
  let dataForm = {
    name: name.current.value,
    email: email.current.value,
    photo: photo.current.value,
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

  return (
   <main className='flex  h-screen w-screen md: items-center animate__animated animate__fadeIn'>
    <img src="./images/registerimg.png" alt="" className='hidden md:block h-[70%] md:w-[70%] lg:h-[100%] '/>
     <div className=': w-[100%] justify-evenly  items-center mdp-8 md:mt-10 flex flex-col  md:w-[30%] md:h-[85%] md:justify-evenly md:items-center'>
      <img src="./images/logo.png" className='w-[140px]' alt="" />
      <h1 className='text-[32px] font-bold'>Welcome!</h1>
      <p className='text-[12px] text-center font-bold text-[#898989]'>Discover manga, manhua and manhwa, track your progress, <br></br> have fun, read manga.</p>
      <form onSubmit={handleForm} className=' h-[60vh] justify-evenly  md:text-[12px] flex flex-col  md:h-[50vh] md:w-[24vw] md:justify-around '>
      <div className='w-[100%] flex flex-col'>
      <label htmlFor="name" className='text-[#898989] '>Name</label>
      <input type="text" id='name' className='border-b-[1px] border-[#626161] p-1' ref={name} />
      </div>
      <div className='w-[100%] flex flex-col'>
      <label htmlFor="email" className='text-[#898989] '>Email</label>
      <input type="email" id='email' className='border-b-[1px] border-[#626161] p-1' ref={email} />
      </div>
      <div className='w-[100%] flex flex-col'>
      <label htmlFor="ph" className='text-[#898989] '>Photo</label>
      <input type="text" id='ph' className='border-b-[1px] border-[#626161] p-1' ref={photo} />
      </div>
      <div className='w-[100%] flex flex-col'>
      <label htmlFor="pwd" className='text-[#898989] '>Password</label>
      <input type="password" id='pwd' className='border-b-[1px] border-[#626161] p-1' ref={password} />
      </div> 
      <div className='w-[100%] flex'>
      <input type="checkbox" id='info' />
      <label htmlFor="info" className='text-[#898989] '>Send notification to my email</label>
      </div>
      
      <button type='submit' className='border border-black w-[250px] h-[48px] rounded-md bg-gradient-to-r from-[#434343] to-[#000] text-white font-bold md:w-[100%]  xl:w-[100%]'>Sing up</button>
      <button type='submit' className='border border-black flex justify-center text-[#898989] font-bold items-center w-[250px] h-[48px] rounded-md md:w-[100%] xl:w-[100%]'><img src="./images/Google.png" className='w-[24px]' alt="" />Sing up with Google</button>
      <p className='text-[12px] text-[#898989]'>already have an account?<span  className='font-bold text-[#FF0000] hover:cursor-pointer' onClick={()=> props.setShow(!props.show) } > Log in</span> </p> 
     </form>
    </div>
   </main>
  )
}
