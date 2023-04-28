import { createBrowserRouter } from 'react-router-dom'
import Main from '../App.jsx'
import Layout from '../layouts/Main.jsx'
import ChapterForm from '../pages/ChapterForm.jsx'
import AuthorForm from '../components/AuthorForm.jsx'


const routes = createBrowserRouter([
    { path: '/', 
    element:<Layout/>, 
    children:[
        { path: '/', element:<Main/>, errorElement:<div>ups hubo un error</div>}, //aca es es el home
        { path: '/chapter-form', element:<ChapterForm/>},
        
    ]
    },
    { path: '/author-form', element:<AuthorForm/> }
])

export default routes