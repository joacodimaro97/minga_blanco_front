import { Link as Anchor } from 'react-router-dom'
import NavBar from "../components/Navbar"
import logo from '/images/logo.png'
import rgtImg from '/images/newRoleImg.png'
import group1 from '/images/newRole1.png'
import group2 from '/images/newRole2.png'

export default function NewRole() {
  return (
    <>
    <NavBar/>
    <div className="">
        <div className=" w-[100vw] h-[90vh] flex flex-col items-center justify-center gap-7">
            <h1 className="text-center text-lg">Change role to</h1>
            <img src={logo} alt="logoImg" className="w-32"/>

            <Anchor to={'/author-form'} className='w-[100%] flex justify-center'>
                <label htmlFor="group2" className="w-[80%] cursor-pointer text-center border-2 border-black/25 rounded-lg mt-4 px-3 | md:w-[50%] md:flex md:justify-center | lg:justify-between lg:py-2 lg:text-start active:border-3 active:border-black">
                    <div className="flex gap-7">
                        <img src={group1} className="hidden | lg:inline-block w-20 h-9 self-center"/>
                        <div className="m-auto">
                            <h1 className="font-bold">Join as an Author!</h1>
                            <p className="text-sm text-slate-500">I'm a reader writting a manga</p>
                        </div>
                    </div>
                    <input type="checkbox" className="hidden accent-black | lg:inline-block lg:self-start" id="group2"/>
                </label>
            </Anchor>

            <Anchor className='w-[100%] flex justify-center'>
                <label htmlFor="group1" className="w-[80%] cursor-pointer text-center border-2 border-black/25 rounded-lg mt-4 px-3 | md:w-[50%] md:flex md:justify-center | lg:justify-between lg:py-2 lg:text-start active:border-3 active:border-black">
                    <div className="flex gap-7">
                        <img src={group2} className="hidden | lg:inline-block w-20 h-9 self-center"/>
                        <div className="m-auto">
                            <h1 className="font-bold">Join as an Company!</h1>
                            <p className="text-sm text-slate-500">I'm a company and i want to publish my comics</p>
                        </div>
                    </div>
                    <input type="checkbox" className="hidden accent-black | lg:inline-block lg:self-start" id="group1"/>
                </label>
            </Anchor>

        </div>

        <div className=" relative col-span-1">
            <img className="mobile:hidden absolute top-0 right-0" src={rgtImg} />
        </div>

    </div>
    </>
  )
}
