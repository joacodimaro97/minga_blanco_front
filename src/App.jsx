import logo from "./assets/images/logo.png";
import narutodos from "./assets/images/mangashero.png";
import naruto from "./assets/images/narutofon.png";
import footer from "./assets/images/footer.png";
import logoface from "./assets/images/face.png";
import logotweet from "./assets/images/bird.png";
import logovimo from "./assets/images/vimeo.png";
import logoyout from "./assets/images/yt.png";
import carru1 from "./assets/images/carru1.png";
import carru2 from "./assets/images/carru2.png";
import carru3 from "./assets/images/carru3.png";
import carru4 from "./assets/images/carru4.png";
import carru5 from "./assets/images/carru5.png";
import carru6 from "./assets/images/carru6.png";
import carru7 from "./assets/images/carru7.png";
import carru8 from "./assets/images/carru8.png";
import carru9 from "./assets/images/carru9.png";
import carru10 from "./assets/images/carru10.png";








function App() {
  return (
    <>
      <div className="min-h-screen w-full  bg-[#040404]">
        <nav className="w-full h-[70px] p-4 flex bg-[#000]  justify-between">
          <button className="contents cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className=" text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <img src={logo} alt="" className="items-end" />
        </nav>
        <div className="sm:h-[100%] sm:w-[50%] sm:rounded-full sm:bg-gradient-to-r from-[#121226] to-[#0b094a] blur-[115px] absolute right-0 z-0"></div>

        <main className="min-w-full flex flex-col  min-h-[120vh]  p-4 justify-between items-center sm:min-h-[10vh] sm:z-1 sm:justify-evenly md:min-h-[200vh] md:bg-fondoOscuro md:bg-fondo 2xl:min-h-[220vh]">
          <h1 class="text-white hidden sm:block sm:text-center sm: text-[2rem] sm:font-bold md:text-[4rem] md:text-gray-300 z-10">
            Best manga reader
          </h1>
          <img className="opacity-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] z-0 sm:hidden" src={naruto} alt="" />
          <div className=" flex h-[60%] items-center  w-full  sm: justify-around z-10  md:h-[40%]">
            
            <img
              className="hidden sm:flex h-[18] w-[18rem] md:w-[38vw] md:h-[20rem] lg:w-[35rem] lg:h-[30rem] opacity-80"
              src={narutodos}
              alt=""
            />
            <div className="h-[18rem] w-[18rem] flex  justify-center flex-col pt-[4rem]  md:w-[20rem]  md:min-h-[60vh] md:justify-start md:pt-3">
              <h1 className="text-white text-[32px] text-center font-semibold font-inter  w-full py-2 md:text-[2rem] md:text-left">
                Your favourite <br /> manga reader 😏
              </h1>
              <p className=" text-white py-2 text-center w-[80%l] sm:text-left sm:text-[1rem]">
                Is an exceptional app for all manga lovers. With a wide range of
                titles available, from classics to the latest releases, this app
                is perfect for those who want to read manga anytime, anywhere.
              </p>
              <div class="border border-solid border-gray-500 relative flex items-center rounded-md backdrop-blur-[15px]md:w-[100%]">
                <input
                  class=" py-2 w-90 pl-10 bg-transparent text-center placeholder-white sm:w-[100%] md:w-[20rem]"
                  type="text"
                  placeholder="Search mangas"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="absolute w-6 h-6 text-white left-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
                <div class="absolute inset-0 bg-white bg-opacity-10 rounded-md"></div>
              </div>
            </div>
          </div>
          <a className="text-white z-10 text-center bg-[#4338CA] h-10 p-2 w-[10rem] rounded-[6%]" href="">Get Started</a>
          <div className="w-100 h-[50vh] bg-black z-1 flex justify-center 2xl:h-[100vh]">
          <img className="absolute w-[150px]  z-10 rotate-[1.92deg] sm:w-[250px]  2xl:w-[300px]" src={carru9} alt="" />
          <img className="absolute w-[150px]  z-9 rotate-[-21.02deg] sm:w-[250px]  2xl:w-[300px]" src={carru10} alt="" />
          <img className="absolute w-[150px]  z-8 rotate-[12.07deg] sm:w-[250px]  2xl:w-[300px]" src={carru8} alt="" />
          <img className="absolute w-[150px]  z-6 rotate-[14.32deg] sm:w-[250px]  2xl:w-[300px]" src={carru5} alt="" />
          <img className="absolute w-[150px]  z-4 rotate-[-8.97deg] sm:w-[250px]  2xl:w-[300px]" src={carru7} alt="" />
          
          </div>
        </main>
        <footer className="w-screen p-2 min-h-[45vh] flex flex-col justify-around items-center sm:w-full sm:min-h-[50vh] sm:p-0">
          <img className="rounded-[100%_100%_100%_100%/_0%_0%_100%_100%] lg:w-full" src={footer} alt="" />
          <div className="w-full p-2 min-h-[45vh] flex flex-col justify-around items-center sm:w-full sm:min-h-[20vh] sm:p-0 md:w-[70%] md:border-b-[0.6px] border-[#5d5a5a] md:flex-row md-p-1">        
          <a className="text-white text-[25px]" href="">Home</a>
          <a className="text-white text-[25px]" href="">Mangas</a>
          <img className="w-[90px] h-[46px]" src={logo} alt="" />
          <div className="w-screen p-2 h-[10vh] flex flex-col justify-around items-center sm:w-[35%] sm:min-h-[10vh] sm:p-0 md:flex-col">
          <div className="flex w-full p-2 flex-row  justify-around">
          <a className="text-white" href=""><img className="w-6" src={logoface} alt="" /></a>
          <a className="text-white" href=""><img className="w-6" src={logotweet} alt="" /></a>
          <a className="text-white" href=""><img className="w-6" src={logovimo} alt="" /></a>
          <a className="text-white" href=""><img className="w-6" src={logoyout} alt="" /></a>
          </div>
          <a className="text-center p-1 text-black rounded-40 bg-white h-[35px] rounded-[5%] w-[220px]" href="">Donate ♡</a>
          </div>
          </div> 
        </footer>
      </div>
    </>
  );
}

export default App;
