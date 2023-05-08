import React, { useState } from 'react'
import axios from 'axios';
import { useRef } from 'react';
import apiUrl from '../../api';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { redirect } from 'react-router-dom';


export default function Login({setShow, show}) {
  console.log(show)
  console.log(setShow)
  let email = useRef()
  let password = useRef()
  const navigate = useNavigate()
  let user = JSON.parse(localStorage.getItem('user'))
function handleSubmit(e){
    e.preventDefault();
    let token = localStorage.getItem('token')
    let headers = {headers:{'Authorization':`Bearer ${token}`}}
    let dataSignin = {
      email: email.current.value,
      password: password.current.value,
    }
console.log(dataSignin)
    axios.post(apiUrl + 'auth/signin', dataSignin, headers)
      .then((res) => {
        console.log(res.data);
        console.log(res.data.token)
        console.log(res.data.user)
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user', JSON.stringify(res.data.user))
        navigate('/', { replace: true })

        

        Swal.fire(
          `Welcome ${res.data.user.email}`,
          'You are logged in!',
          'success'
        )
       
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: 'error',
          title: 'Error logging in',
          text: `${err.response.data.message}`,
        })
      });
  };




  
  // let role = localStorage.getItem('role')
  //   console.log(role);
  //   let token = localStorage.getItem('token')
  //   console.log(token);
  //   let headers = {headers:{'Authorization':`Bearer ${token}`}}


  return (
    <main className='flex justify-center align-center items-center h-screen w-screen'>
      <div className='w-[100%]  h-[90%]  lg:p-8 lg:mt-10 flex flex-col  lg:w-[40%] lg:h-[90%] lg:justify-evenly items-center'>
      <img src="./images/logo.png" className='w-[140px] mb-10' alt="" />
      <h1 className='text-[32px] font-bold'>Welcome!</h1>
      <p className='text-[12px] text-center font-bold text-[#898989]'>Discover manga, manhua and manhwa, track your progress, <br></br> have fun, read manga.</p>
      <form action="get" onSubmit={handleSubmit} className='w-[90%] h-[100%] md:text-[12px] flex flex-col  lg:h-[50vh] lg:w-[24vw] justify-around '>
      <div className='w-[100%] flex flex-col'>
      <label htmlFor="email" className='text-[#898989] '>Email</label>
      <input type="text" id='email' className='border-b-[1px] border-[#626161]' ref={email}/>
      </div>
      <div className='w-[100%] flex flex-col'>
      <label htmlFor="pwd" className='text-[#898989] '>Password</label>
      <input type="password" id='pwd' className='border-b-[1px] border-[#626161]' ref={password}/>
      </div>
      <button type='submit' className='border border-black w-[100%]  lg:w-[344px] h-[48px] rounded-md bg-gradient-to-r from-[#434343] to-[#000] text-white font-bold'>Sing in</button>
      <button className='border border-black flex justify-center text-[#898989] font-bold items-center lg:w-[344px] h-[48px] rounded-md'><img src="./images/Google.png" className='w-[24px]' alt="" />Sing in with Google</button>
     </form>
      <p className='text-[12px] text-[#898989]'>you don't have an account yet?<span onClick={()=> setShow((show)=>!show) }  className='text-[#FF0000] font-bold hover:cursor-pointer'> Sign up</span></p> 
    </div>
    <img src="./images/login.png" alt="" className='hidden md:block   md:w-[50%] lg:w-[60%] lg:h-[70%]  xl:w-[70%] xl:h-[100%]' />
    </main>
  )
}
