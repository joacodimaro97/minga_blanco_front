import { useEffect, useRef, useState} from "react"
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useSelector, useDispatch } from "react-redux"
import { Link as Anchor } from 'react-router-dom'
import inputs_filter_actions from '../store/actions/inputs_filter.js'
import author_mangas_actions from "../store/actions/author_mangas.js"
import axios from "axios"
import apiUrl from "../../api.js"
import NavBar from "../components/Navbar.jsx"
import Footer from "../components/Footer.jsx"
import Swal from 'sweetalert2'
const { inputs_filter } = inputs_filter_actions
const { author_mangas, delete_manga, update_manga } = author_mangas_actions

export default function Mymangas() {
  let store = useSelector(store => store)
  console.log(store)
  let mangas = useSelector(store => store.author_mangas.author_mangas)
  console.log(mangas)
  let userId = JSON.parse(localStorage.getItem('user')).id
  const { title, categories } = useSelector(store => store.inputs)
  const dispatch = useDispatch()
  let titleRef = useRef(title)
  let category_id = useRef('')
  const [reload, setReload] = useState(false)
  const [dmcsCategories, setCategories] = useState()
  const [pageNum, setPageNum] = useState(1)
  const [authors, setAuthors] = useState()
  const [show, setShow] = useState(false)
  const [mangaId, setMangaId] = useState()
  const [mangaTitle, setMangaTitle] = useState()
  const [mangaDescription, setMangaDescription] = useState()
  const [mangaCoverPhoto, setMangaCoverPhoto] = useState()
  let token = localStorage.getItem('token')
  let headers = {headers:{'Authorization':`Bearer ${token}`}}
  let id = authors?.filter(a => a.user_id === userId)
  let titleUpd = useRef()
  let description = useRef()
  let cover_photo = useRef()
  
  useEffect(()=>{

      let values = []
      let category = Object.values(category_id.current)
      category.forEach(i => {
        if(i.checked){
          values.push(i.value)
        }
      })

      async function getAuthors(){
        axios(apiUrl+'authors', headers)
        .then(res => setAuthors(res.data.authors)) //Ver primero como viene la respuesta de la promesa
        .catch(err => console.log(err))
      }
      
      async function getCategories(){
        axios(apiUrl+'categories', headers)
        .then(res => setCategories(res.data.categories))
        .catch(error => console.log(error))
      }

        dispatch(author_mangas({
          title: titleRef.current?.value,
          category_id: values.join(','),
          page_num: pageNum,
        }))
      
      getAuthors()
      getCategories()
      console.log(authors)
      console.log(id)
    }, [reload, pageNum])
    

    function capture_info(){
      dispatch(inputs_filter({
        title: titleRef.current?.value,
        categories: Object.values(category_id.current)?.filter(i => i.checked)?.map(i => i.value)
      }))
      setReload(!reload)
    }

    let showAlert = (title, httpCb) => {
      Swal.fire({
        title,
        text: "Make sure everything is ok!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
      }).then((result) => {
        if (result.isConfirmed) {
          httpCb()
          Swal.fire(
            'Done!'
          )
        }
      })
    }

    let showAlert2 = (title, httpCb) => {
      Swal.fire({
        title,
        text: "Make sure everything is ok!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
      }).then((result) => {
        if (result.isConfirmed) {
          httpCb()
          setShow(!show)
          Swal.fire(
            'Done!'
          )
        }
      })
    }
    
  return (
    <>
    <NavBar />
    {show && <div className='fixed top-0 bottom-0 right-0 left-0 bg-white/70 grid place-items-center'>
        <div className='bg-black grid place-items-center w-[55%] h-[80%] rounded z-20'>
          <h1 className='text-white'>Edit Manga</h1>
          <input type="text" defaultValue={mangaTitle} ref={titleUpd} placeholder='Edit manga title' className='w-[60%] p-1 rounded outline-none bg-transparent border-b-[1px] text-white'/>
          <input type="text" defaultValue={mangaDescription} ref={description} placeholder='Edit manga description' className='w-[60%] p-1 rounded outline-none bg-transparent border-b-[1px] text-white'/>
          <input type="text" defaultValue={mangaCoverPhoto} ref={cover_photo} placeholder='Edit manga photo' className='w-[60%] p-1 rounded outline-none bg-transparent border-b-[1px] text-white'/>
          <div className="w-[70%] h-[30%] flex justify-around">
            <button className='text-white bg-red-600 p-1 w-[40%] rounded' onClick={()=>showAlert2('Do you want to update it?', ()=>dispatch(update_manga({ 
              manga_id: mangaId,
              dataUpd: {_id: mangaId,
                        title: titleUpd.current?.value,
                        description: description.current?.value,
                        cover_photo: cover_photo.current?.value                       
                        }
              }
            )))}>Save changes</button>
            <button className='text-white bg-red-600 p-1 w-[40%] rounded' onClick={()=>setShow(!show)}>Cancel</button>
          </div>
        </div>
      </div>}
    <div className="bg-black text-white w-[100%] h-[100%] flex flex-col pt-14 | lg:h-[1150px]">
      <div className="lg:grid lg:grid-cols-4">

        <div className="text-center lg:col-span-1 lg:text-start lg:px-12 lg:mt-[11rem]">
          <h1 className="mb-3 text-2xl lg:mb-7">Categories</h1>
          <form ref={category_id} className="text-white flex flex-col gap-2">
            {dmcsCategories?.map(i => 
            <label htmlFor={i.name} key={i._id} className="text-white/60 lg:text-lg">
              <input defaultChecked={categories?.includes(i._id)} type="checkbox" id={i.name} value={i._id} onClick={capture_info}/>
              {i.name}
            </label>
            )}
          </form>
        </div>

        <div className="lg:col-span-3">
          <div className="flex flex-col items-center mt-10 gap-4 lg:items-start lg:mt-0 lg:gap-16">
            <h1 className="text-center lg:text-3xl">My mangas <span className="lg:text-2xl">🤤</span></h1>
              <div className="w-[100%] flex flex-col items-center mt-6 gap-8 lg:flex-row lg:mb-10 lg:justify-between lg:w-[85%]">
              <input className="text-white text-center w-[70%] rounded bg-white/10 border-2 border-white/20 h-7 focus:outline-none md:w-[35%] lg:h-9 lg:w-[60%]" defaultValue={title} type="text" name="title" id="title" ref={titleRef} onKeyUp={capture_info} placeholder="Searh mangas"/>
              <Anchor className="bg-neutral-500 rounded p-2 text-sm">+ Add New Manga</Anchor>
              </div>
          </div>

          <div className="flex flex-col text-center items-center gap-20 my-10 lg:grid lg:grid-cols-3 lg:gap-y-10 lg:gap-x-4 lg:w-[90%] lg:mt-0">
            {mangas?.length === 0 && <h1 className="w-[90%] text-white/60 text-center col-span-3 text-xl | lg:my-10 lg:text-start lg:text-3xl">¡Out of stock mangas!</h1>}
            {mangas?.map(i =>
            <div key={i._id} className="w-[100%] lg:w-[100%]">
              <h2 className="inline-block text-white/60 mb-1 | lg:text-start">{i.title}</h2>
              <img src={i.cover_photo} alt="mangaImg" className="w-[70%] h-[17rem] mx-auto mb-4 | md:w-[40%] | lg:w-[100%] lg:col-span-1 lg:mb-4"/>
              <div className="w-[60%] flex justify-around md:w-[40%] lg:w-[100%] mx-auto">
                <button className="text-white bg-neutral-500 px-3 rounded w-[40%] mx-auto | md:w-[30%] lg:w-[32%] lg:mx-0" onClick={()=>{setShow(!show); setMangaId(i._id); setMangaTitle(i.title); setMangaDescription(i.description); setMangaCoverPhoto(i.cover_photo)}}>Edit</button>
                <button className="text-white bg-red-600 px-3 rounded w-[40%] mx-auto | md:w-[30%] lg:w-[32%] lg:mx-0" onClick={()=>showAlert('Do you want to deleted?', ()=> dispatch(delete_manga({manga_id: i._id})))}>Delete</button>
              </div>
            </div>)}
            {mangas?.length < 6 || <div className="bg-white w-[40%] h-10 rounded-lg md:w-[30%] col-span-3 | lg:mt-5 ">
              <button className="text-black border-r-2 border-r-black w-[50%] h-[100%] text-center" onClick={()=>{setPageNum(pageNum-1); pageNum <= 1 ? setPageNum(1) : null }}>
              <AiOutlineArrowLeft className="mx-auto lg:hidden"/>
              <span className="hidden lg:block  text-xl">Prev</span>
              </button>
              {mangas?.length === 6 && <button className="text-black w-[50%] h-[100%] text-center" onClick={()=>{setPageNum(pageNum+1)}}>
              <AiOutlineArrowRight className="mx-auto lg:hidden" />
              <span className="hidden lg:block text-xl">Next</span>
              </button>}
            </div>}
          </div>
        </div>

      </div>
    </div>

    <Footer />
    </>
  )
}
