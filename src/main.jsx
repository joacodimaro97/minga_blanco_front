// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { RouterProvider } from 'react-router-dom'
// import routes from './router/router.jsx'



// ReactDOM.createRoot(document.getElementById('root')).render(
//     <RouterProvider router={routes} />,

// )
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
);
