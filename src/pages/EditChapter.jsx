import axios from "axios";
import React, {useRef} from "react";
import apiUrl from "../../api";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Main from '../App.jsx'

export default function EditChapter() {
  let chapterId = useParams()
  let title = useRef()
  let order = useRef()
  let pages = useRef()

  function handleForm(e){
    e.preventDefault()
    let inputpages = pages.current.value
    let listPages = inputpages.split(',')
    let data = {
      manga_id: chapterId.id_manga,
      title: title.current.value,
      order: order.current.value,
      pages: listPages
    }
    console.log(data)
    axios.post(apiUrl+"chapters", data,headers)
    .then(res => {console.log(res)
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Author created succesfully',
      confirmButtonText:'OK',
    })
  })
    .catch(error => {
    console.error(error)
    if (error.response && error.response.data){
      Swal.fire({
        icon:'error',
        title:'Error',
        text: error.response.data.message,
        confirmButtonText:'OK',
        width:"300px",
      })
    } else{
      Swal.fire({
        icon:'error',
        title:'Error',
        text: 'An error occurred while creating the author',
        confirmButtonText:'OK'
      })
    }
  })
}

    // let role = localStorage.getItem('role')
    let role = JSON.parse(localStorage.getItem('user'))?.role;

  return (
    <>
    { role == 1 || role == 2 ?(
    <>
    <div className="flex justify-around bg-black items-center">
    <div className="z-50 absolute md:h-[50%] md:w-[50%] md:rounded-full md:bg-gradient-to-r from-[#121226] to-[#130f84] blur-[115px] right-4" ></div>
    <section className="grid h-[80vh] mb-[11rem] place-content-center text-slate-300 pt-52">
        <div className="mb-10 text-center text-black">
                        <h1 className="text-3xl -tracking-tight font-sans text-white">Edit Chapter</h1>
        </div>
        <form className="flex flex-col items-center justify-center space-y-6 pt-14">
            <input type="text" id="" name="" placeholder="Name of the manga" className="w-80 appearance-none  border-0  p-2 px-4 text-white border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0"  />
            <div>
                <select  placeholder="Insert order" className="w-80 appearance-none  border-0  p-2 px-4  border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0  text-slate-400" name="chapters">
                    <option value="" key="rr">Select chapter</option>
                </select>
            </div>
            <div>
                <select  placeholder="Insert order" className="w-80 appearance-none  border-0  p-2 px-4  border-b border-gray-500 text-slate-400 bg-black" name="chapters">
                    <option value="" key="rr">Select data</option>
                </select>
            </div>
            <div>
                <input type="text" id="Insert order" name="Insert order" placeholder="Data to edit" className="w-80 appearance-none  border-0  p-2 px-4 text-white border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 mb-16"  />
            </div>
                <button className="rounded-sm bg-[#34D399] p-2 w-72 py-4 text-white t-10 font-bold text-lg"> Send</button>
                <button className="rounded-sm bg-[#FBDDDC] p-2 w-72 py-4 text-[#EE8380] t-10 font-bold text-lg"> Delete</button>
        </form>
    </section>
    <div className=" justify-center grid place-content-center pt-12 h-full items-center mobile:hidden">
        <p className="text-center mb-5 font-bold text-white z-50">Chapter #1 - Discover the word</p>
        <img className="h-[35rem] w-auto items-center z-50" src='https://i.postimg.cc/Nj4bXyr2/main-shingeki-no-kyojin.png'/>
    </div>
    
    </div>
</>
    ):(
      <Main /> 
    )}

    </>
  )
}
