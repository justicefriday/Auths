import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,createRoutesFromElements,Route
} from 'react-router-dom';
import HomePages from './Pages/HomePages.jsx'
import MainLayout from './Layout/MainLayout.jsx'
import NotFoundPage from './Pages/NotFoundPage.jsx'
import Register from './Pages/Register.jsx';
import Login from './Pages/Login.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';



const App = () => {
  
  

  
  
    const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainLayout/>} >
        <Route index element ={<HomePages/>} />
         <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path='*' element={<NotFoundPage/>} />
          
        </Route>
     )
  )
  return (

    <RouterProvider router={router}/>

  )
}

export default App
