import { createBrowserRouter } from 'react-router-dom'
import Main from '../App.jsx'
import Layout from '../layouts/Main.jsx'
import ChapterForm from '../pages/ChapterForm.jsx'


const routes = createBrowserRouter([
    { path: '/', 
    element:<Layout/>, 
    children:[
        { path: '/', element:<Main/>, errorElement:<div>ups hubo un error</div>}, //aca es es el home
        { path: '/chapter-form', element:<ChapterForm/>},
        
    ]
    }
])

export default routes