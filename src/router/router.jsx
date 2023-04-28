import { createBrowserRouter } from "react-router-dom";
import Main from '../App.jsx'
import AuthorForm from '../components/AuthorForm.jsx'

const routes = createBrowserRouter([
    { path: '/', element: <Main />},
    { path: '/author-form', element: <AuthorForm /> }
])

export default routes