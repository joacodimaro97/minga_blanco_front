import { useEffect, useRef, useState} from "react"
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useSelector, useDispatch } from "react-redux"
import { Link as Anchor } from 'react-router-dom'
import inputs_filter_actions from '../store/actions/inputs_filter.js'
import axios from "axios"
import apiUrl from "../../api"
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
const { inputs_filter } = inputs_filter_actions

export default function Manga() {
  const { title, categories } = useSelector(store => store.inputs )
  const dispatch = useDispatch()
  let titleRef = useRef(title)
  let category_id = useRef('')
  const [reload, setReload] = useState(false)
  const [dmcsCategories, setCategories] = useState()
  const [mangas, setMangas] = useState()
  const [pageNum, setPageNum] = useState(1)
  let token = localStorage.getItem('token')
  let headers = {headers:{'Authorization':`Bearer ${token}`}}
  useEffect(()=>{
  
      let values = []
      let category = Object.values(category_id.current)
      category.forEach(i => {
        if(i.checked){
          values.push(i.value)
        }
      })
      async function getQueries(){
        axios(apiUrl+`mangas?title=${titleRef.current?.value}&category_id=${values.join(',')}&page=${pageNum}`, headers)
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
    }, [reload, pageNum])
    
    function capture_info(){
      dispatch(inputs_filter({
        title: titleRef.current?.value,
        categories: Object.values(category_id.current)?.filter(i => i.checked)?.map(i => i.value)
      }))
      setReload(!reload)
    }
    
    console.log(dmcsCategories)
    console.log(mangas)
    console.log(pageNum)
  return (
    <>
    <NavBar />
    <div className="bg-black text-white w-[100%] h-[100%] flex flex-col pt-14 | lg:h-[1100px]">
      <div className="lg:grid lg:grid-cols-4">

        <div className="text-center lg:col-span-1 lg:text-start lg:px-12 lg:mt-[11rem]">
          <h1 className="mb-3 text-2xl lg:mb-7">Categories</h1>
          <form ref={category_id} className="text-white flex flex-col gap-2">
            {dmcsCategories?.map(i => 
            <label htmlFor={i.name} key={i._id} className="text-white/60 lg:text-lg">
              <input defaultChecked={categories.includes(i._id)} type="checkbox" id={i.name} value={i._id} onClick={capture_info}/>
              {i.name}
            </label>
            )}
          </form>
        </div>

        <div className="lg:col-span-3">
          <div className="flex flex-col items-center my-10 gap-4 lg:items-start lg:mt-0 lg:gap-16">
            <h1 className="text-center lg:text-3xl">Search your next mangas <span className="lg:text-2xl">🤤</span></h1>
            <input className="text-white text-center w-[50%] rounded bg-white/10 border-2 border-white/20 h-7 focus:outline-none md:w-[35%] lg:h-9 lg:w-[48%]" defaultValue={title} type="text" name="title" id="title" ref={titleRef} onKeyUp={capture_info} placeholder="Searh mangas"/>
          </div>

          <div className="flex flex-col text-center items-center gap-20 my-16 lg:grid lg:grid-cols-3 lg:gap-y-10 lg:gap-x-4 lg:w-[90%] lg:mt-0">
            {mangas?.length === 0 && <h1 className="w-[90%] text-white/60 text-center col-span-3 text-xl | lg:my-10 lg:text-start lg:text-3xl">¡The search did not match any results!</h1>}
            {mangas?.map(i =>
            <div key={i._id} className="w-[100%] lg:w-[100%]">
              <h2 className="inline-block text-white/60 mb-1 | lg:text-start">{i.title}</h2>
              <img src={i.cover_photo} alt="mangaImg" className="w-[70%] h-[17rem] mx-auto mb-4 | md:w-[40%] | lg:w-[100%] lg:col-span-1 lg:mb-4"/>
              <Anchor className="text-white bg-red-600 px-3 rounded w-[50%] mx-auto | md:w-[30%] lg:w-[32%] lg:mx-0" to={`/manga/${i._id}`}>Details</Anchor>
            </div>)}
            <div className="bg-white w-[40%] h-10 rounded-lg md:w-[30%] col-span-3 | lg:mt-5 ">
              <button className="text-black border-r-2 border-r-black w-[50%] h-[100%] text-center" onClick={()=>{setPageNum(pageNum-1); pageNum <= 1 ? setPageNum(1) : null }}>
              <AiOutlineArrowLeft className="mx-auto lg:hidden"/>
              <span className="hidden lg:block  text-xl">Prev</span>
              </button>
              {mangas?.length === 6 && <button className="text-black w-[50%] h-[100%] text-center" onClick={()=>{setPageNum(pageNum+1)}}>
              <AiOutlineArrowRight className="mx-auto lg:hidden" />
              <span className="hidden lg:block text-xl">Next</span>
              </button>}
            </div>
          </div>
        </div>

      </div>
    </div>
    <Footer />
    </>
  )
}