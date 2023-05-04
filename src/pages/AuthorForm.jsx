import { FaUserCircle } from 'react-icons/fa'
import { useRef } from 'react'
import axios from 'axios'
import NavBar from '../components/Navbar'

const AuthorForm = () => {
  let name = useRef()
  let last_name = useRef()
  let city = useRef()
  let date = useRef()
  let photo = useRef()
  function submitText (){
    let data ={
      name: name.current.value,
      last_name: last_name.current.value,
      city: city.current.value,
      date: date.current.value,
      photo: photo.current.value,
      active: 'true'
    }
    axios.post('http://localhost:8000/api/authors/author-form', data)
      .then(res=>console.log(res))
      .catch(err =>console.log(err.response.data))
  }
  return (
    <>
    <NavBar className=""/>
    <div className='grid place-items-center w-[100vw] h-[90vh] bg-black text-white | xl:h-[90vh] | 2xl:h-[90vh] 2xl:py-16'>
     <form className='flex flex-col items-center justify-center h-[100%] w-[100%] gap-8 | md:w-[75%] | lg:w-[60%] | xl:gap-10 | 2xl:justify-between '>
        <h1 className='text-3xl | xl:text-5xl'>New Author</h1>
        <FaUserCircle className='text-6xl | xl:text-8xl'/>
        <input type="text" ref={name} placeholder='Name' className='w-[65%] bg-transparent outline-none pl-3 border-b-[3px] border-b-white/50 | xl:text-3xl'/>
        <input type="text" ref={last_name} placeholder='Last Name' className='w-[65%] bg-transparent outline-none pl-3 border-b-[3px] border-b-white/50 | xl:text-3xl'/>
        <input type="text" ref={city} placeholder='Location'  className='w-[65%] bg-transparent outline-none pl-3 border-b-[3px] border-b-white/50 | xl:text-3xl'/>
        <input type="date" ref={date} className='w-[65%] bg-transparent outline-none pl-3 border-b-[3px] border-b-white/50 text-white | xl:text-3xl' />
        <input type="text" ref={photo} placeholder='URL Image Profile' className='w-[65%] bg-transparent outline-none pl-3 border-b-[3px] border-b-white text-white/50 | xl:text-3xl'/>
        <div onClick={submitText} className='bg-slate-100 text-black font-bold cursor-pointer w-[65%] text-center py-3 rounded-3xl | lg:w-[35%] lg:mt-2 | xl:text-3xl'>Send</div>
      </form>
    </div>
    </>
  )
}

export default AuthorForm