import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from "react-router-dom"

export default function Main() {
  const location = useLocation();
  if(location.pathname !== '/' && location.pathname !== "/chapter-form/:id_manga" ){
    return <Outlet />
  }
  return (
    <>
     <Navbar  />


     <Outlet/>

     <Footer />
  
    </>

  )
}
