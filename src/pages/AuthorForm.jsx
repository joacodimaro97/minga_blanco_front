import { FaUserCircle } from 'react-icons/fa'
import { useRef } from 'react'
import axios from 'axios'
import NavBar from '../components/Navbar'
import apiUrl from '../../api'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AuthorForm = () => {
  let name = useRef()
  let last_name = useRef()
  let city = useRef()
  let date = useRef()
  let photo = useRef()
  const navigate = useNavigate()

  function createAuthor (){
    let url = apiUrl+'authors/author-form'
    let token = localStorage.getItem('token')
    let user = JSON.parse(localStorage.getItem('user'))
    let headers = {headers:{'Authorization':`Bearer ${token}`}}
    let data ={
      name: name.current.value,
      last_name: last_name.current.value,
      city: city.current.value,
      date: date.current.value,
      photo: photo.current.value,
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
  return (
    <>
    <NavBar/>
    <div className=' grid place-items-center w-full [90vh] bg-black text-white | xl:min-h-[90vh] | 2xl:min-h-[90vh] 2xl:py-16'>
      <form className=' flex flex-col items-center justify-center h-[100%] w-[100%] gap-8 | md:w-[75%] | lg:w-[60%] | xl:gap-10 | 2xl:justify-between '>
        <h1 className='text-3xl | xl:text-5xl'>New Author</h1>
        <FaUserCircle className='text-6xl | xl:text-8xl'/>
        <input type="text" ref={name} placeholder='Name' className='w-[65%] bg-transparent outline-none pl-3 border-b-[3px] border-b-white/50 | xl:text-3xl'/>
        <input type="text" ref={last_name} placeholder='Last Name' className='w-[65%] bg-transparent outline-none pl-3 border-b-[3px] border-b-white/50 | xl:text-3xl'/>
        <input type="text" ref={city} placeholder='Location'  className='w-[65%] bg-transparent outline-none pl-3 border-b-[3px] border-b-white/50 | xl:text-3xl'/>
        <input type="date" ref={date} className='w-[65%] bg-transparent outline-none pl-3 border-b-[3px] border-b-white/50 text-white | xl:text-3xl' />
        <input type="text" ref={photo} placeholder='URL Image Profile' className='w-[65%] bg-transparent outline-none pl-3 border-b-[3px] border-b-white text-white/50 | xl:text-3xl'/>
        <div onClick={createAuthor} className='bg-white text-black font-bold cursor-pointer w-[65%] text-center py-3 rounded-3xl | lg:w-[35%] lg:mt-2 | xl:text-3xl  '>Send</div>
      </form>
    </div>
    </>
  )
}

export default AuthorForm