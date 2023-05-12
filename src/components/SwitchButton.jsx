import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";



export default function SwitchButton({id, handleClick, setOn, saveMangas, dispatch, switchOn}){


  

    return (
        <button type="button" className={`relative inline-block w-10 h-6 rounded-full transition-colors duration-300 ${setOn ? 'bg-[#12B28C]' : 'bg-[#970000b3]'}`}
          onClick={handleClick}>
          <span className={`absolute inset-0 w-4 h-4 mx-1 my-1 bg-white rounded-full transition-transform duration-300 ${setOn ? 'transform translate-x-full' : ''}`}/>
        </button>
      )   
}