import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-black  w-screen p-2 min-h-[35vh] flex flex-col justify-around items-center sm:w-full sm:min-h-[50vh] sm:p-0">
          <img className="rounded-[100%_100%_100%_100%/_0%_0%_100%_100%] lg:w-full" src="./images/foot.png" alt="" />
          <div className="w-full p-2 min-h-[45vh] flex flex-col justify-around items-center sm:w-full sm:min-h-[20vh] sm:p-0 md:w-[70%] md:border-b-[0.6px] border-[#5d5a5a] md:flex-row md-p-1">        
              <a className="text-white text-[15px]" href="">Home</a>
              <a className="text-white text-[15px]" href="">Mangas</a>
              <img className="w-[90px] h-[46px]" src="./images/logo.png" alt="" />
              <div className="w-screen p-2 h-[10vh] flex flex-col justify-around items-center sm:w-[35%] sm:min-h-[10vh] sm:p-0 md:flex-col">
                  <div className="flex w-full p-2 flex-row  justify-around">
                      <a className="text-white" href=""><img className="w-6" src="./images/face.png" alt="" /></a>
                      <a className="text-white" href=""><img className="w-6" src="./images/bird.png" alt="" /></a>
                      <a className="text-white" href=""><img className="w-6" src="./images/vimeo.png" alt="" /></a>
                      <a className="text-white" href=""><img className="w-6" src="./images/yt.png" alt="" /></a>
                  </div>
                  <a className="text-center p-1 text-black rounded-40 bg-white h-[35px] rounded-[5%] w-[220px]" href="">Donate ♡</a>
              </div>
          </div> 
    </footer>
  )
}
