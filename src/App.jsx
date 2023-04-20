import logo from "./assets/images/logo.png";

function App() {
  return (
    <>
      <div className="min-h-screen  bg-[#000]">
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
        <main className="w-full  h-[80vh]  bg-hero bg-fit bg-no-repeat bg-center  p-4">
          <div className=" h-full w-full flex items-center justify-center flex-col">
            <h1 className="text-white text-[32px] text-center font-semibold  w-full py-2">
              Your favourite <br /> manga reader <br /> 😏
            </h1>
            <p className="text-white py-2 text-center w-full">
              is an exceptional app for all manga lovers. With a wide range of
              titles available, from classics to the latest releases, this app
              is perfect for those who want to read manga anytime, anywhere.
            </p>
            <div class="relative flex items-center rounded-md backdrop-blur-[15px]">
              <input
                class="py-2 w-90 pl-10 bg-transparent text-center placeholder-white"
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
        </main>
      </div>
    </>
  );
}

export default App;
