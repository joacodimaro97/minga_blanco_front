import React from 'react'
import Carousel from '../components/Carousel'
import Button from '../components/Button'

export default function Index() {
    return (
        <main className="bg-black min-w-full flex flex-col  min-h-[80vh]  p-4 justify-between items-center sm:min-h-[80vh] sm:z-1 sm:justify-evenly md:min-h-[90vh] md:bg-fondoOscuro md:bg-fondo 2xl:min-h-[110vh]">
            <h1 class="text-white hidden sm:block sm:text-center sm: text-[2rem] sm:font-bold md:text-[4rem] md:text-gray-300 z-10">Best manga reader</h1>
            <img className="opacity-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] z-0 md:hidden" src="./images/narutofon.png" alt="" />
            <div className=" flex   flex-col-reverse sm:flex-row h-[80vh] items-center  w-full  sm: justify-around z-10  md:h-[40%]">
              <Carousel />
                <div className="h-[18rem] w-[18rem] flex  justify-center flex-col pt-[4rem]  md:w-[20rem]  md:min-h-[60vh] md:justify-start md:pt-3">
                <h1 className="text-white text-[32px] text-center font-semibold font-inter  w-full py-2 md:text-[2rem] md:text-left">Your favourite <br /> manga reader 😏</h1>
                <p className=" text-white py-2 text-center w-[80%l] sm:text-left sm:text-[1rem]">
                        Is an exceptional app for all manga lovers. With a wide range of
                        titles available, from classics to the latest releases, this app
                        is perfect for those who want to read manga anytime, anywhere.</p>
                <Button />
              </div>
            </div>

        </main>
    )
}
