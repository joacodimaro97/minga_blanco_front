import { useEffect, useRef, useState} from "react"
import axios from "axios"
import apiUrl from "../../api"
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import Button from '../components/Button'


export default function Manga() {
  let title = useRef()
  let category_id = useRef('')
  const [reload, setReload] = useState(false)
  const [categories, setCategories] = useState()
  const [mangas, setMangas] = useState()
  useEffect(()=>{
  
      let category = Object.values(category_id.current)
      console.log(category)
      let values = []
      category.forEach(i => {
        if(i.checked){
          values.push(i.value)
        }
      })
      async function getQueries(){
        axios(apiUrl+`mangas?title=${title.current?.value}&category_id=${values.join(',')}`)
        .then(res=>setMangas(res.data.response))
        .catch(error=>console.log(error))
      }
      async function getCategories(){
        axios(apiUrl+'categories')
          .then(res => setCategories(res.data.categories))
          .catch(error => console.log(error))
      }
      getCategories()
      getQueries()
    }, [reload])
    
    console.log(categories)
    console.log(mangas)
  return (
    <>
    <NavBar />
    <div className="bg-black text-white w-[100%] h-[100%] flex flex-col pt-14">
      <div className="">
        <div className="text-center">
          <h1 className="mb-3 text-xl">Categories</h1>
          <form ref={category_id} className="text-white flex flex-col">
            {categories?.map(i => 
            <label htmlFor={i.name} key={i._id}>
              <input type="checkbox" id={i.name} value={i._id} onClick={()=>setReload(!reload)}/>
              {i.name}
            </label>
            )}
          </form>
        </div>
        <div className="flex flex-col items-center my-10 gap-4">
          <h1 className="text-center">Search your next mangas <span>🤤</span></h1>
          <input className="text-black text-center w-[50%] rounded bg-white/20 h-7 focus:outline-none" type="text" name="title" id="title" ref={title} onKeyUp={()=>setReload(!reload)} placeholder="Searh mangas"/>
        </div>
        <div className="flex flex-col text-center items-center gap-12 my-20">
          {mangas?.map(i =>
            <div key={i._id}>
              <img src={i.cover_photo} alt="mangaImg" className="w-[12rem] h-[12rem] mx-auto mb-4"/>
              <h2>{i.title}</h2>
            </div>
          )}
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}
