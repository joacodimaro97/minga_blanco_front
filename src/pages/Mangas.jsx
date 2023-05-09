
import 'animate.css';
import NavBar from '../components/Navbar';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import apiUrl from '../../api';
import 'animate.css';
import Swal from 'sweetalert2';
import { Navigate, useNavigate } from 'react-router-dom';


export default function MangasForm() {

let navigate = useNavigate()

  useEffect(
    () => { axios(apiUrl + 'categories').then(res => categories(res.data.categories)).catch(err => console.error(err)) },
    []                                    //array de dependecias vacio ya que necesitamos fechar una unica vez al mostrarse el componente
  )
  let [cat, categories] = useState([])
  console.log(cat)

  const options = () => {
    return cat.map(a => <option className='w-80 appearance-none  border-0  p-2 px-4  border-b border-gray-500   text-black focus:outline-none focus:ring-0 bg-[#1816164c]' key={a._id} value={a._id}>{a.name}</option>);
  }
  console.log(cat)
const title =useRef()
const category = useRef()
const description = useRef()


function handleForm(e) {
  e.preventDefault()
  let dataForm = {
    title: title.current.value,
    category_id: category.current.value,
    description: description.current.value

  }

  console.log(dataForm)
  let token = localStorage.getItem('token')
  console.log(token)
  let headers = {headers:{'Authorization':`Bearer ${token}`}}

  axios.post(apiUrl + 'mangas', dataForm, headers)
  .then(res => {console.log(res)
    Swal.fire(
      
      'The Manga was created!',
      'success'
      )
      navigate('/')}
  )

  .catch((err) => {
    console.log(err)
    if (err.response.data.message == 'The Manga already exist') {
      Swal.fire({
        icon: 'error',
        title: 'The manga already exists!',
      });}
    Swal.fire({
      icon: 'error',
      title: 'Error at create Mangas',
      text: `${err.response.data.message}`,
    })
  });
  }








let user = JSON.parse(localStorage.getItem('user'));
let role = user.role;
console.log(role);

console.log(role)
    
return (
  <>
    {role == 1 || role == 2 ? (
      <>
        <NavBar />
        <section className="grid bg-black h-[90vh] place-content-center text-slate-300 animate__animated animate__fadeIn">
          <div className="mb-10 text-center text-white">
            <h1 className="text-3xl text-white text-[36px]">New Manga</h1>
          </div>
          <form className='flex flex-col  justify-between  w-[100%] h-[55vh]' onSubmit={(e) => handleForm(e)}>
              <div className="flex flex-col items-center  space-y-6 pt-14">
                <input ref={title} type="text" id="title" name="title" placeholder="Insert title" className="w-80 appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent  text-white opacity-80 focus:outline-none focus:ring-0" />
              <div>
                <select ref={category} placeholder="Insert category" className="w-80 appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent  opacity-80" name="categories">
                  <option value="" key="rr" className='w-80 appearance-none  border-0  p-2 px-2  border-b border-gray-500   text-black opacity-80 focus:outline-none focus:ring-0 bg-[#1816164c]'>Insert Category</option>
                  {options()}
                </select>
              </div>
              <div>
                <input ref={description} type="text" id="Insert description" name="Insert order" placeholder="Insert description" className="w-80 appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent  text-white opacity-80 focus:outline-none focus:ring-0" />
              </div>
              </div>
                <button className="rounded-[5px] bg-white p-2 px-[43.5%] py-3 text-black t-10 font-bold text-lg"> Send</button>
          </form>
        </section>
        
      </>
    ) : (
      <>
       
        <div className='md:hidden'>
          
        </div>
      </>
    )}
  </>
)
}