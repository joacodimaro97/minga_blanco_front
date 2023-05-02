import React, { useState } from 'react'
import axios from 'axios';
import { useRef } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    let data = useRef()

    axios.post('/signup', { name, email, photo, password })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <main className='flex  h-screen w-screen'>
      <div className='p-8 mt-10 flex flex-col  w-[30%] h-[85%] justify-evenly items-center'>
      <img src="./images/logo.png" className='w-[140px] mb-10' alt="" />
      <h1 className='text-[32px] font-bold'>Welcome!</h1>
      <p className='text-[12px] text-center font-bold text-[#898989]'>Discover manga, manhua and manhwa, track your progress, <br></br> have fun, read manga.</p>
      <form action="  get" onSubmit={handleSubmit} className='text-[12px] flex flex-col  h-[50vh] w-[24vw] justify-around '>
      <div className='w-[100%] flex flex-col'>
      <label htmlFor="email" className='text-[#898989] '>Email</label>
      <input type="text" id='email' className='border-b-[1px] border-[#626161]'/>
      </div>
      <div className='w-[100%] flex flex-col'>
      <label htmlFor="pwd" className='text-[#898989] '>Password</label>
      <input type="text" id='pwd' className='border-b-[1px] border-[#626161]' />
      </div>
      <button type='submit' className='border border-black w-[344px] h-[48px] rounded-md bg-gradient-to-r from-[#434343] to-[#000] text-white font-bold'>Sing in</button>
      <button className='border border-black flex justify-center text-[#898989] font-bold items-center w-[344px] h-[48px] rounded-md'><img src="./images/Google.png" className='w-[24px]' alt="" />Sing in with Google</button>
     </form>
      <p className='text-[12px] text-[#898989]'>you don't have an account yet?<span className='text-[red] font-bold '> Sign up</span></p> 
    </div>
    <img src="./images/login.png" alt="" className='w-[70%]' />
    </main>
  )
}
