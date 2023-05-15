import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import apiUrl from '../../api';
import actions from '../store/actions/chapter_bar';

export default function ChapterPages() {
    //store
    let [reload,setReload,]=useState(true)
    let [id_next,setIdNext]=useState()
    let [id_prev,setIdPrev]=useState()
    const dispatch = useDispatch()
    const stateChapters = useSelector( store => store.data)
    const [title, setTitle] = useState(stateChapters.title);
    const [order, setOrder] = useState(stateChapters.order);
    //
    const {chapter_bar} = actions
    let { id , page } = useParams()
    const navigate = useNavigate()
    console.log(page)

    const [allPages, setAllPages] = useState([]);
    const [imgPage, setImgPage] = useState("");
    const [counter,setCounter] = useState(parseInt(page));

    let token = localStorage.getItem('token')
    let headers = {headers:{'Authorization':`Bearer ${token}`}}

    useEffect(
        ()=>{ axios(apiUrl+'chapters/'+id, headers)
        .then(res=>{
            setAllPages(res.data.response.pages);
            setTitle(res.data.response.title)
            setOrder(res.data.response.order)
            setImgPage(res.data.response.pages[counter]);
            setIdNext(res.data.id_next);
            setIdPrev(res.data.id_prev);
            dispatch(chapter_bar({
              title: res.data.response.title,
              order: res.data.response.order,
          })) 
        })
        .catch(err=>console.log(err))
        }, [reload]
    )

    
    let next = ()  => {
        let newCounter = counter + 1
        if (newCounter >= allPages.length - 1) {
            newCounter = 0;
            setCounter (newCounter)
            navigate(`/chapters/${id_next}/${newCounter}`);
            setReload(!reload)

        }else{
          setCounter(newCounter)
        console.log(newCounter)
        dispatch(chapter_bar({
            title: title,
            order: order
        }))
        navigate(`/chapters/${id}/${newCounter}`);
        }
    }
    
    let previous = () => {
        let newCounter = counter - 1
        if (counter === 0 ) {
        newCounter = allPages.length - 1
        if(id_prev){
          navigate(`/chapters/${id_prev}/0`);
          setReload(!reload)
          return //Se agrego para evitar que se siga ejecutando el arreglo
        } else{
          navigate(`/manga/${id}/${page}`)
          return
        }

      }
        setCounter(newCounter)
        navigate(`/chapters/${id}/${newCounter}`)
    }

    useEffect(() => {
        setImgPage(allPages[counter]);

    }, [counter])

  

  return (
       
    <>
                    
    <section className="bg-black w-full flex flex-col min-h-full justify-center items-center xsm:bg-white sm:min-h-[100vh] sm:z-1 sm:justify-center sm:items-center  md:min-h-[90vh] md:justify-center md:bg-fondoOscuro md:bg-fondo 2xl:min-h-[110vh]"> 
    <div className="z-50 absolute md:h-[50%] md:w-[50%] md:rounded-full md:bg-gradient-to-r from-[#121226] to-[#130f84] blur-[115px] right-4" ></div>
           <div className='w-full min-h-[80vh] flex justify-center items-center flex-col'>
             
             <div className='flex justify-center items-center w-full min-h-full'>

              <img className='object-contain h-full md:z-50 lg:z-50' src={imgPage} alt="chapter" />

              <button onClick={previous} type="button" className="flex absolute top-0 left-0 my-16 justify-start items-center px-4 h-full w-3/6 cursor-pointer group focus:outline-none z-50" data-carousel-prev>
              <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white  group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                <span class="hidden">Previous</span>
              </span>
              </button>

              <button onClick={next} type="button" className="flex absolute top-0 right-0 my-16 justify-end items-center px-4 h-full w-3/6 cursor-pointer group focus:outline-none z-50" data-carousel-next>
              <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white  group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="hidden">Next</span>
              </span>
              </button>
              
             </div>
            
            <div className='flex justify-center items-center w-full h-12' >
            <svg xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke="#ffff" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <p className='text-white'>48</p>
            </div>

          </div>
             
    </section>

    
    </>
  )
}
