import React from 'react'
import { Link as Anchor } from 'react-router-dom'



   export const Card = ({manga}) => {

  const handleClick = () => {
    alert('al hacer click redirige a la parte de la tarea M-08')
  }

     return (
        <div className="w-[45vw] h-[32vh] bg-transparent  flex flex-col p-1 m-1 sm:w-[40%] md:w-[35%] md:m-2">
          <Anchor to={manga.url}>
          <img onClick={handleClick} src={manga.cover_photo} alt="" className="object-cover w-[95%] h-[75%] md:w-[80%] md:h-[25vh] rounded-xl brightness-80 contrast-2 transition duration-300 transform hover:scale-105" />
          </Anchor>
          <p className="text-[15px] text-white opacity-80">{manga.title}</p>
        </div>
     )
   }