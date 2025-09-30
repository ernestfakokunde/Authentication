 import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import './index.css'
import Layout from './components/layout.jsx'
import protectedRoute from './components/protectedRoute.jsx'


 const App = () => {
   return (
            //declare navbar here
       <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <protectedRoute>
                 <Dashboard />
            </protectedRoute>
            } />
       </Routes>
   )
 }
 
 export default App