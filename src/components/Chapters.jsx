import { useState, useEffect } from "react"
import axios from "axios"


export default function Chapters({closeRead, manga , id }){


const [chapter, setChapter] = useState([])
const [page, setPage] = useState(1)
const [filterChapter, setFilterChapter] = useState ([])

const  handleSearch = (e) => {
 setFilterChapter(chapter.filter(c=> c.title.toLowerCase().includes(e.target.value.toLowerCase())))
}

const prev = () =>{
    if(page > 1){
        setPage (page -1)
    }   
}
const next = () =>{
    if(chapter.length >= 4){
        setPage (page +1)
    }   
}

useEffect(()=>{
    axios.get(`http://localhost:8000/api/chapters?manga_id=${id}&page=${page}`)
    .then(response=>{
        setChapter(response.data.response)
        setFilterChapter(response.data.response) 

    })
    .catch(error=>{
        console.log(error)
    })

}, [page])

return (
    <>
     
      <div className="w-full min-h-[80vh] position-absolute bg-black top-0 items-center flex flex-col">
      <button className="text-white bg-transparent  px-4 py-2 hover:bg-white hover:rounded-md hover:text-black transition duration-1000 ease-in-out cursor-pointer" onClick={closeRead}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg></button>
        <div className="z-0 md:h-[70%] md:w-[50%] md:rounded-full md:bg-gradient-to-r from-[#121226] to-[#0b094a] blur-[115px] absolute right-0"></div>
        <div className="z-10   w-[90%] h-[50%] text-white flex flex-col justify-end items-center rounded-xl bg-no-repeat bg-cover bg-center relative" style={{ backgroundImage: `url(${manga?.cover_photo})` }}>
          <div className="absolute inset-0   rounded-md">
            <div className="h-full bg-gradient-to-t from-black to-[#000000c7]"></div>
          </div>
          <div className="relative z-10  h-[60%] w-[40%] flex flex-col items-center justify-evenly">
            <p>Chapters of</p>
            <h1 className="text-[48px] font-bold">{manga?.title}</h1>
            <div className="border border-solid border-[#9D9D9D] relative flex items-center rounded-md backdrop-blur-[15px]md:w-[100%]">
              <input className="relative z-30  py-2 w-90 pl-10 bg-transparent text-center placeholder-white sm:w-[100%] md:w-[20rem] opacity-40" onKeyUp={(e)=>handleSearch(e)} id="search" type="text" placeholder="Search chapter"/>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="absolute w-6 h-6 text-white left-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
              </svg>
              <div className="absolute inset-0 bg-white bg-opacity-10 rounded-md"></div>
            </div>
          </div>
        </div>
        <div className="w-[80%] min-h-[70vh] flex flex-wrap p-10 justify-around z-20 mt-20 ">
        {page > 1 && <button className="bg-[#3f3f3f] text-white rounded-[40%] h-[2rem] w-[3rem] " onClick={prev}>Prev</button>}
            {
                filterChapter?.map(c => (
                <div className="flex flex-col gap-4">
                <img className="object-cover w-[200px] rounded-md opacity-90" src={c.cover_photo} alt="" />
                    <p className="text-white">{c.title}</p>
                </div>
                ) )
        }
       
           
               
                {chapter.length >= 4 && <button className="bg-[#3f3f3f] text-white rounded-[40%] h-[2rem] w-[3rem] " onClick={next}>Next</button>}
            
        </div>
      </div>
    </>
)
}