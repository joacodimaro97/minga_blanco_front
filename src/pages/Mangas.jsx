import { useEffect, useRef, useState} from "react"
import axios from "axios"
import apiUrl from "../../api"
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import Button from '../components/Button'


export default function Manga() {
  let title = useRef()
  const [reload, setReload] = useState(false)
  const [categories, setCategories] = useState()
  const [mangas, setMangas] = useState()
  useEffect(()=>{
      async function getQueries(){
        axios(apiUrl+`mangas?title=${title.current.value}&category_id=64591cc33737bb096abe1168`)
        .then(res=>setMangas(res.data.response))
        .catch(error=>console.log(error))
      }
      getQueries()
    }, [reload])
    
    useEffect(()=> {
      axios(apiUrl+'categories')
        .then(res => setCategories(res.data.categories))
        .catch(error => console.log(error))
    }, [])

    console.log(categories)
    console.log(mangas)
  return (
    <>
    <NavBar />
    <div className="bg-black text-white w-[100%] h-[90vh] flex flex-col pt-14">
      <div className="">
        <div className="text-center">
          <h1 className="mb-3 text-xl">Categories</h1>
          {categories.map(i => <h3 className="text-white/50 my-2">{i.name}</h3>)}
        </div>
        <div className="flex flex-col items-center my-10 gap-4">
          <h1 className="text-center">Search your next mangas <span>🤤</span></h1>
          <input className="text-black text-center w-[50%] rounded bg-white/20 h-7 focus:outline-none" type="text" name="title" id="title" ref={title} onKeyUp={()=>setReload(!reload)} placeholder="Searh mangas"/>
        </div>
      </div>
      <div>
        {mangas.map(i => <h3>{i.title}</h3>)}
      </div>
    </div>
    <Footer />
    </>
  )
}
