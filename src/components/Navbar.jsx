import React, { useState } from "react";
import { Link as Anchor, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import axios from "axios"
import apiUrl from "../../api"
import "animate.css";



export default function NavBar() {
    const [menu, setMenu] = useState(false);
    const {order, title} = useSelector( store => store.data)

    const navigate = useNavigate()
    let token = localStorage.getItem('token')

    function handleLogout() {
        let token = localStorage.getItem('token')  
        let headers = {headers:{'Authorization':`Bearer ${token}`}}
        axios.post(apiUrl+'auth/signout',null,headers)

            .then(res=> {
                localStorage.removeItem('token')
                localStorage.removeItem('user')
                navigate('/')
            })
            .catch(err => alert(err))        
    }
    
    const menuClick = () => {
        setMenu(!menu);
    };

    const closeMenu = () => {
        setMenu(false);
    };


    let user = JSON.parse(localStorage.getItem('user'))
    let role = JSON.parse(localStorage.getItem('user')).role
   


    return (
        <nav className="h-[10vh] flex justify-between p-4 bg-black">
            <button className="contents" onClick={menuClick}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white hover:bg-white hover:text-black hover:rounded-md  ">
                    <path strokeLinecap="round" strokeLinejoin="round" d={menu ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}/></svg>
            </button>
            
            <img className="h-[5vh]" src='/public/images/logo.png' alt="logo" />
            {menu && (
                <div className="fixed flex flex-col items-center p-2 z-20 top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-[#5b5353] to-[#111113] w-[100%] h-[100%] rounded-br-[5%] md:w-[30%] md:h-[100%] md:rounded-br-[2%] animate__animated animate__fadeIn" style={{ boxShadow: "0px 5px 30px rgba(255, 255, 255, 0.3)" }}>

                    <div className="flex items-center justify-around w-[90%] ">
                        {token && <img src={user.photo} className="p-1  w-10 rounded-[50%]" alt="" />}
                        <ul>
                            {token && <li className="text-white">{user.name}</li>}
                            {token && <li className="text-white">{user.email}</li>}
                        </ul>
                        <button className="text-white bg-transparent  px-4 py-2 hover:bg-white hover:rounded-md hover:text-black transition duration-1000 ease-in-out cursor-pointer" onClick={closeMenu}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg></button>


                    </div>
                    <div className="flex items-start justify-center h-full w-full p-4">
                        <ul className="flex flex-col justify-start font-bold items-center w-full  h-[60%] md:items-center space-y-1">

                           
                            

                        <Anchor to={"/"} className="text-white h-[4vh] rounded-[7%] hover:bg-white hover:text-black text-center  text-[1rem] w-[35%] transition duration-1000 ease-in-out cursor-pointer">Home</Anchor>
                            
                            {!token && <Anchor to={'/auth'} className= "text-white h-[4vh] rounded-[7%] hover:bg-red hover:text-black text-center  text-[1rem] w-[100%] transition duration-1000 ease-in-out cursor-pointer">Log in</Anchor>}
                            {!token && <Anchor to={'/auth'} className= "text-white h-[4vh] rounded-[7%] hover:bg-red hover:text-black text-center  text-[1rem] w-[100%] transition duration-1000 ease-in-out cursor-pointer">Register</Anchor>}
                            {token && <Anchor onClick={handleLogout} className= "text-white h-[4vh] rounded-[7%] hover:bg-white hover:text-black text-center  text-[1rem] w-[100%] transition duration-1000 ease-in-out cursor-pointer">Logout</Anchor>}
                            {token && <Anchor className= "text-white h-[4vh] rounded-[7%] hover:bg-white hover:text-black text-center  text-[1rem] w-[100%] transition duration-1000 ease-in-out cursor-pointer">Favourites</Anchor>}
                            {token && <Anchor to={'/mangas-form'} className="text-white h-[4vh] rounded-[7%] hover:bg-white hover:text-black text-center  text-[1rem] w-[100%] transition duration-1000 ease-in-out cursor-pointer">New Manga</Anchor>}
                            {token && <Anchor to={'/mangas'} className= "text-white h-[4vh] rounded-[7%] hover:bg-white hover:text-black text-center  text-[1rem] w-[100%] transition duration-1000 ease-in-out cursor-pointer">Mangas</Anchor>}
                            {token && <Anchor to={'/chapter-form/:id_manga'} className= "text-white h-[4vh] rounded-[7%] hover:bg-white hover:text-black text-center  text-[1rem] w-[100%] transition duration-1000 ease-in-out cursor-pointer">Chapters</Anchor>}
                            {token && <Anchor to={'/new-role'} className= "text-white h-[4vh] rounded-[7%] hover:bg-white hover:text-black text-center  text-[1rem] w-[100%] transition duration-1000 ease-in-out cursor-pointer">New Role</Anchor>}
                            {token && <Anchor to={'/mymangas'} className= "text-white h-[4vh] rounded-[7%] hover:bg-white hover:text-black text-center  text-[1rem] w-[100%] transition duration-1000 ease-in-out cursor-pointer">My mangas</Anchor>}
                            

                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
}