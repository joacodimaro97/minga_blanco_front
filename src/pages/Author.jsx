import Navbar from "../components/Navbar";
import 'animate.css';
import SwitchButton from "../components/SwitchButton";
import axios from "axios";
import { useEffect, useState} from "react";
import save_author from "../store/actions/save_author";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import moment from "moment"
import { Card } from "../components/card";




const {saveAuthorData} = save_author
const {saveMangas} = save_author




export default function Author() {

const store = useSelector(store => console.log(store.save_author))
const switchOn = useSelector(state => state.save_author.switchOn)
const dispatch = useDispatch()



function handleSaveAuthor(authorData){
  dispatch(saveAuthorData({
    author_photo: authorData.photo,
    author_name: authorData.name,
    author_last_name: authorData.last_name,
    author_city: authorData.city,
    author_country: authorData.country,
    author_date: moment(authorData.createdAt).format("DD/MM/YYYY")
  }))
}

const {id} = useParams()
const [author, setAuthor] = useState()
const [mangas, setMangas] = useState([])
const [setOn, setIsOn] = useState(false);




const handleClick = () => {
  setIsOn(!setOn); 
  dispatch(saveMangas(!setOn))
}




let token = localStorage.getItem('token')
let headers = {headers:{'Authorization':`Bearer ${token}`}}
useEffect(() => {
  axios.get(`http://localhost:8000/api/authors/${id}`, headers)
      .then(response => {
          setAuthor(response.data.response);
          handleSaveAuthor(response.data.response)
      })
      .catch(error => {
          console.error(error);
      });
},[]);


useEffect(()=>{
  axios.get(`http://localhost:8000/api/mangas/authors/${id}?new=${setOn}`, headers)
  .then(response => {
    setMangas(response.data.response)
  })
  .catch(error =>{
    console.log(error)
  })
}, [setOn])




let photo = author?.photo
let name = author?.name
let lastName = author?.last_name
let country = author?.country
let city = author?.city
let date = author? moment(author.createdAt).format("DD/MM/YYYY") : '';


const mangas_photo = mangas.map(manga => manga.cover_photo)
console.log(mangas_photo)
const mangas_title = mangas.map(manga => manga.title)
console.log(mangas_title)
console.log(mangas)
    return (
      <>
      <Navbar/>
      <section className=" bg-black  h-[110vh] flex flex-col justify-evenly items-center  animate__animated animate__fadeIn md:w-full ">
      <div className="flex justify-evenly items-center py-2 bg-[#8484847a] rounded-xl w-[90%] h-[10vh] sm:w-[70%] md:w-[30%] text-white">
        <img src={photo} alt="" className="w-[55px] h-[50px] p-1 rounded-[50%]" />
        <div className="flex flex-col text-[12px]"> 
            <h1 className="text-[16px]" >{name} {lastName}</h1>
            <p className="flex  w-[9rem]"><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>
  {city}, {country}</p>
            <p className="flex w-[9rem]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
</svg>
{date}</p>
        </div>
        <img className="w-[18px] h-[18px]" src="../images/check.png" alt="" />
      </div>
      
      <div className=" w-[90%] h-[10vh] border-b border-white text-[14px] text-[#fff] px-1  sm:w-[70%] md:w-[40%] md:text-[14px] md:h-[8vh]">
      
      </div>
      {mangas.length >= 4 && <div className="w-[70%] h-[5vh] flex justify-evenly items-center md:w-[20%]">
        <p className="text-white opacity-80">New</p>
        <SwitchButton {...{ handleClick,id, setOn, saveMangas, dispatch, switchOn }} />
       <p className="text-white opacity-80">Old</p>
      </div>}
      <div className=" w-screen p-1 h-[60%] flex flex-wrap justify-center sm:w-[80%] md:w-[50%]">
       
      {mangas.map(manga => (<Card  manga={manga} />))}
      
      </div>
      </section>
        
      </>
    )
    }