
import axios from "axios";
import React, {useRef} from "react";
import apiUrl from "../../api";
import { useParams } from "react-router-dom";

export default function ChapterForm() {
  let chapterId = useParams()
  console.log(chapterId)
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
    axios.post(apiUrl+"chapters", data)
    .then(res => console.log(res))
    .catch(err => console.error(err.res.data.message))
    console.log(data)

  }
  return (
    <>
    <section className="grid h-screen place-content-center text-slate bg-black">
     <div className="mb-6 text-center text-black font-thin">
     <h1 className="text-5xl text-white ">New Chapter</h1>
   
     </div>
     <form className="flex flex-col items-center justify-center space-y-6 pt-14" onSubmit={(e)=>handleForm(e)}>

     <input type="text" id="Insert title" name="title" placeholder="Insert title" className="w-80 appearance-none  border-0  p-2 px-4 text-white border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0" ref={title}/>
     
     <input type="text" id="Insert order" name="Insert order" placeholder="Insert order" className="w-80 appearance-none  border-0  p-2 px-4 text-white border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0" ref={order} />
     
     <input type="array" id="Insert pages" name="Insert pages" placeholder="Insert pages" className="w-80 appearance-none  border-0  p-2 px-4 text-white border-b border-gray-500 bg-transparent focus:outline-none focus:ring-0 mb-20" ref={pages} />
     
     <button className=" w-80 rounded-md bg-white p-2 px-16 py-4 text-black t-10 font-bold text-2xl" type="submit" value={"send"}> Send </button>
     </form>
    </section>

    </>
  )
}


