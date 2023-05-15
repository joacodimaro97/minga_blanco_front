import React from "react";
import { useState } from "react";
import Register from '../pages/Register.jsx'
import Login from '../pages/Login.jsx'



export default function AuthForm(){
    const [show, setShow] = useState(true)

    console.log(useState())
    return (
        <>
        {show ? <Login setShow={setShow} show={show} /> : <Register setShow={setShow} show={show} />}
        
        
        </>
    )
}