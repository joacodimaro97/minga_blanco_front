import React from 'react';
import { Link as Anchor } from 'react-router-dom'
import Navbar from '../components/Navbar';



export default function NewRole() {

    return (
        <> 
        <Navbar />
        <div className="flex h-screen">
            <div className="bg-white w-full sm:w-1/2 flex justify-center items-center flex-col">
                <p className='text-[#434242] text-xl '>Change role to</p>
                <img src="./images/logo.png" className="h-[6vh] my-2" alt="background" />
                <Anchor to={'/author-form'} className='w-[100%] flex justify-center'>
                    <label htmlFor="group1" className="w-[80%] cursor-pointer text-center border-2 border-black/25 rounded-lg mt-4 px-3 | md:w-[65%] md:flex md:justify-center | lg:justify-between lg:py-2 lg:text-start active:border-3 active:border-black">
                        <div className="flex gap-7">
                            <img src="./images/group32.png" className=" lg:inline-block w-20 h-9 self-center" />
                            <div className="">
                                <h1 className="font-bold">Join as an Author!</h1>
                                <p className="text-sm text-slate-500">I'm a reader writting a manga</p>
                            </div>
                        </div>
                        
                    </label>
                </Anchor>
                <Anchor to={'/company-form'} className='w-[100%] flex justify-center '>
                    <label htmlFor="group1" className="w-[80%] cursor-pointer text-center border-2 border-black/25 rounded-lg mt-4 px-3 | md:w-[65%] md:flex md:justify-center | lg:justify-between lg:py-2 lg:text-start active:border-3 active:border-black">
                        <div className="flex gap-7">
                            <img src="./images/group35.png" className=" lg:inline-block w-20 h-9 self-center" />
                            <div className="">
                                <h1 className="font-bold">Join as an Company!</h1>
                                <p className="text-sm text-slate-500">I'm a company and i want to publish my comics</p>
                            </div>
                        </div>
                        
                    </label>
                </Anchor>
            </div>
            <div className='hidden sm:flex sm:flex-col h-screen w-1/2 bg-[url(images/nrf.png)] bg-no-repeat bg-center bg-cover'>
                <p className='text-white font-montserrat font-medium text-2xl leading-7	mt-[15vh] px-[10%]'>Minga.com is the best place to find manga reviews. We’ve been super impress by the quality of applicants.</p>
                <p className='text-white font-montserrat font-normal text-base leading-5 mt-[15vh] px-[10%]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                    </svg>
                    Ignacio Borraz
                </p>

            </div>
        </div>
        </>
    )
}
