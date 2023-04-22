import logo from "./assets/images/logo.png";
import narutodos from "./assets/images/mangashero.png";
import naruto from "./assets/images/narutofon.png";

function App() {
  return (
    <>
      <div className="min-h-screen w-full  bg-[#000]">
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
        <div className="sm:h-[100%] sm:w-[50%] sm:rounded-full sm:bg-gradient-to-r from-black to-indigo-900 blur-[115px] absolute right-0 z-0"></div>

        <main className="min-w-full flex flex-col h-[100vh]  p-4 justify-center align-center sm:z-1 sm:justify-evenly md:bg-fondoOscuro md:bg-fondo">
          <h1 class="text-white hidden sm:block sm:text-center sm: text-[2rem] sm:font-bold md:text-[4rem] md:text-gray-300 z-10">
            Best manga reader
          </h1>
          <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] z-0 sm:hidden" src={naruto} alt="" />
          <div className="flex h-[60%] items-center  w-full  sm: justify-around z-10 ">
            
            <img
              className="hidden sm:flex h-[18] w-[18rem] md:w-[38vw] md:h-[20rem] lg:w-[35rem] lg:h-[30rem]"
              src={narutodos}
              alt=""
            />
            <div className="h-[18rem] w-[18rem] flex  justify-center flex-col pt-[4rem]  md:w-[20rem]  md:min-h-[60vh] md:justify-start md:pt-3">
              <h1 className="text-white text-[32px] text-center font-semibold font-inter  w-full py-2 md:text-[2rem] md:text-left">
                Your favourite <br /> manga reader 😏
              </h1>
              <p className="text-white py-2 text-center w-full sm:text-left sm:text-[1rem]">
                is an exceptional app for all manga lovers. With a wide range of
                titles available, from classics to the latest releases, this app
                is perfect for those who want to read manga anytime, anywhere.
              </p>
              <div class="relative flex items-center rounded-md backdrop-blur-[15px]md:w-[100%]">
                <input
                  class="py-2 w-90 pl-10 bg-transparent text-center placeholder-white sm:w-[100%] md:w-[20rem]"
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
        </main>
        <footer className="bg-black w-screen h-[20vh] flex flex-col sm:w-full">
          <div className=""></div>
        </footer>
      </div>
    </>
  );
}

export default App;
