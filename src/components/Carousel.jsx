import React, { useState, useEffect } from 'react'
import axios from 'axios';
import apiUrl from '../../api';

export default function Carousel() {
    useEffect(
        ()=>
        { axios(apiUrl+'resources')
        .then(res=>setImages(res.data.resources))
        .catch(err=>console.log(err))
        },
        [] //array vacio, ya que necesitamos montar una sola vez lo que traemos de la api
    )



let[images, setImages] = useState([])

let [counter, setCounter] = useState(0);


useEffect(() => {
    
    const intervalId = setInterval(() => {
      setCounter(prevCounter => (prevCounter + 1) % images.length)
    }, 4000)
    return () => {
      clearInterval(intervalId)
    };
  }, [images]);



  return (
    <div id="controls-carousel" className="hidden md:relative md:w-[50%] md:flex md:items-center md:justify-center">
        
    <img className="h-[18rem] w-[18rem] md:w-[38vw] md:h-[20rem] lg:w-[35rem] lg:h-[30rem] brightness-90" src={images[counter]?.cover_photo} alt="IMG" />
       
    </div>
  )
}
