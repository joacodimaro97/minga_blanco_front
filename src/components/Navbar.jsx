import React, { useState } from "react";


export default function NavBar() {
    const [menu, setMenu] = useState(false);

    const menuClick = () => {
        setMenu(!menu);
    };

    const closeMenu = () => {
        setMenu(false);
    };

    return (
        <nav className="h-[10vh] flex justify-between p-4 bg-black">
            <button className="contents" onClick={menuClick}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d={menu ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}/></svg>
            </button>
            <img className="h-[5vh]" src='./images/logo.png' alt="logo" />
            {menu && (
                <div className="fixed flex flex-col items-center p-2 z-20  top-0 right-0 bottom-0 left-0 bg-gradient-to-r from-[#5b5353] to-[#111113] w-[100%] h-[100%] rounded-br-[5%] md:w-[45%] md:h-[60%] md:rounded-br-[5%]">
                    <div className="flex items-center justify-around w-[90%]">
                        <img src="./images/user.png" className="p-1  w-10 rounded-[50%]" alt="" />
                        <ul>
                            <li className="text-white">Joaquin Dimaro</li>
                            <li className="text-white">joaquin@hotmail.com</li>
                        </ul>
                        <button className="text-white bg-transparent  px-4 py-2" onClick={closeMenu}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg></button>


                    </div>
                    <div className="flex items-start justify-center h-full w-full p-4">
                        <ul className="flex flex-col justify-start font-bold items-center w-full  h-[60%] md:items-center space-y-1">
                            <li className="text-white h-[4vh] rounded-[7%] hover:bg-white hover:text-black text-center  text-[1rem] w-[100%] ">Home</li>
                            <li className="text-white h-[4vh] rounded-[7%] hover:bg-white hover:text-black text-center  text-[1rem] w-[100%] ">Mangas</li>
                            <li className= "text-white h-[4vh] rounded-[7%] hover:bg-white hover:text-black text-center  text-[1rem] w-[100%] ">Chapters</li>
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
}

