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
import Page from '../pages/Page.jsx'
import Mangas from '../pages/Mangas.jsx'
import MangaDetail from '../pages/Manga.jsx'
import Mymangas from '../pages/Mymangas.jsx'


let token = localStorage.getItem('token')

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
      {path: '/mangas/:id/:page', element:(token? <MangaDetail /> : <div>Not Found!</div>)},
      {path: '/mangas', element:(token? < Mangas/> : <div>Not Found!</div>)},
    ]
  },

       {path: '/author-form', element:(token? <AuthorForm/>: <div>Not Found!</div>) },
       {path: '/new-role', element: < NewRole/> },
       {path: '/mymangas', element: <Mymangas/>}

])

export default routes
