import Navbar from "../components/Navbar"
import 'animate.css';






export default function Author() {
    //
    return (
      <>
      <Navbar/>
      <section className=" bg-black  h-[110vh] flex flex-col justify-evenly items-center  animate__animated animate__fadeIn md:w-full ">
      <div className="flex justify-evenly py-2 bg-[#8484847a] rounded-xl w-[90%] h-[10vh] sm:w-[70%] md:w-[30%] text-white">
        <img src="../images/lucas.png" alt="" className="w-[65px]" />
        <div className="flex flex-col text-[12px]"> 
            <h1>Lucas Ezequiel Silva</h1>
            <p className="">Caseros, Buenos Aires</p>
            <p>16/02/2000</p>
        </div>
        <input type="checkbox" name="" id="" />
      </div>
      
      <div className=" w-[90%] h-[10vh] border-b border-white text-[14px] text-[#fff] px-1  sm:w-[70%] md:w-[40%] md:text-[14px] md:h-[8vh]">
        <p>Estudiante de diseño fanatico del manga, acuario, ascendente en Lorem ipsum dolor....</p>
      </div>
      <div>

      </div>
      <div className=" w-screen p-1 h-[60%] flex flex-wrap justify-center sm:w-[80%] md:w-[50%]">
       <div className=" w-[45vw] h-[32vh] bg-[#d3ceceea] rounded-xl flex flex-col p-1 m-1 sm:w-[40%] md:w-[35%] md:m-2">
        <img src="../images/komi.png" alt="" className="w-[95%] h-[75%] md:w-[80%] md:h-[25vh]" />
        <p className="text-[15px] ">Komi san Cant Communicate</p>
       </div>
       <div className=" w-[45vw] h-[32vh] bg-[#d3ceceea] rounded-xl flex flex-col p-1 m-1 sm:w-[40%] md:w-[35%] md:m-2">
        <img src="../images/boruto.png" alt="" className="w-[95%] h-[75%] md:w-[80%] md:h-[25vh]" />
        <p className="text-[15px]">Boruto</p>
       </div>
       <div className="w-[45vw] h-[32vh] bg-[#d3ceceea] rounded-xl flex flex-col p-1 m-1 sm:w-[40%] md:w-[35%] md:m-2">
        <img src="../images/evangelion.png" alt="" className="w-[95%] h-[75%] md:w-[80%] md:h-[25vh]" />
        <p className="text-[15px]">Evangelion</p>
       </div>
       <div className="w-[45vw] h-[32vh] bg-[#d3ceceea] rounded-xl flex flex-col p-1 m-1 sm:w-[40%] md:w-[35%] md:m-2">
        <img src="../images/kaguya.png" alt="" className="w-[95%] h-[75%] md:w-[80%] md:h-[25vh]" />
        <p className="text-[15px]">Kaguya-sama: Love is war</p>
       </div>
      </div>
      </section>
        
      </>
    )
    }