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
import Authform from '../pages/Authform.jsx'
<<<<<<<<< Temporary merge branch 1
import Mangas from '../pages/Mangas.jsx'
=========
import Page from '../pages/Page.jsx'
import Mangasform from '../pages/Mangas.jsx'
>>>>>>>>> Temporary merge branch 2

let token = localStorage.getItem('token')
let role = localStorage

const routes = createBrowserRouter([
  {path: '/', element: (
      <Layout>
      <Navbar />
      <Footer />
      </Layout>
    ),
    children: [
      {path: '/', element:<Main/>, errorElement:<div>ups hubo un error</div>}, //aca es es el home
      {path: '/chapter-form/:id_manga', element:<ChapterForm/>},
      {path: '/chapters/:id/:page', element: <Page/>},
      {path: '/auth', element:(token? <div>Not Found!</div> : <Authform />)},
      {path: '/register', element: (token? <div>Not Found!</div>: <Register/>)},
      {path: '/login', element: (token? <div>Not Found!</div> : <Login />)},
      {path: '/mangas-form', element: (token?  <Mangasform/> : <div>Not Found!</div>)},
>>>>>>>>> Temporary merge branch 2
    ]
  },

       { path: '/author-form', element:<AuthorForm/> },
       {path: '/new-role', element:< NewRole/>}

])

export default routes
<<<<<<<<< Temporary merge branch 1


//para direcciones usar useNavegate, cuando este conectado y ponga singup
=========
>>>>>>>>> Temporary merge branch 2
