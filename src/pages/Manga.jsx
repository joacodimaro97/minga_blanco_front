import Navbar from "../components/Navbar"
import { useState, useEffect } from "react"
import MangaComponent from '../components/Manga'
import Chapters from '../components/Chapters'
import { useParams } from "react-router-dom"
import axios from "axios"


export default function MangaDetail(){

const [read, setRead] = useState(false)
const {id} = useParams()
const [manga, setMangas] = useState()


const readClick = () =>{
    setRead(!read)
}

const closeRead = () => {
    setRead(false)
}




useEffect(()=>{
    axios.get(`http://localhost:8000/api/mangas/${id}`)
    .then(response =>{
        setMangas(response.data.response)
    })
    .catch(error=>{
        console.log(error)
    })
}, [])







    return (
    <>
    <Navbar />
    {read ? <Chapters {...{closeRead,manga,id }} /> : <MangaComponent {...{readClick, manga}}  /> }     
    </>
  )

  }
