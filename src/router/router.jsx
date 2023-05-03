import { createBrowserRouter, BrowserRouter,Route } from 'react-router-dom'
import Main from '../App.jsx'
import Layout from '../layouts/Main.jsx'
import ChapterForm from '../pages/ChapterForm.jsx'
import Register from '../pages/Register.jsx'
import Login from '../pages/Login.jsx'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import AuthorForm from '../pages/AuthorForm.jsx'
import NewRole from '../pages/NewRole.jsx'



let token = localStorage.getItem('token')

const routes = createBrowserRouter([

  {
    path: '/',
    element: (
      <Layout>
        {token && <Navbar />}
        <Main />
        {token && <Footer />}
      </Layout>
    ),
    children: [
      { path: '/', element:<Main/>, errorElement:<div>ups hubo un error</div>}, //aca es es el home
      { path: '/chapter-form/:id_manga', element:<ChapterForm/>},
      
      {
        path:'/register', 
        element: (
          <>
            {token && <Navbar />}
            <Register />
            {token && <Footer />}
          </>
        ), 
        errorElement:<div>Sorry, an error has occurred</div>
      },
      {
        path: '/login',
        element: (
          <>
            {token && <Navbar />}
            <Login />
            {token && <Footer />}
          </>
        ),
      }
    ]
  },

       { path: '/author-form', element:<AuthorForm/> },
       {path: '/new-role', element:< NewRole/>}

])

export default routes


//para direcciones usar useNavegate, cuando este conectado y ponga singup