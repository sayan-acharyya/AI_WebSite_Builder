import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from './Pages/Home'
import toast, { Toaster } from 'react-hot-toast';
import userGetCurrentuser from './hooks/userGetCurrentuser';
import { useSelector } from 'react-redux';
import Dashboard from './Pages/Dashboard';
import Generate from './Pages/Generate';


export const serverUrl = "http://localhost:8000/api"

const App = () => {
  userGetCurrentuser();

  const { userData } = useSelector(state => state.user);

  console.log(userData);


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={userData ? <Dashboard /> : <Home />} />
          <Route path='/generate' element={userData ? <Generate /> : <Home />} />
        </Routes>
        <Toaster position="top-center" />
      </BrowserRouter>
    </>
  )
}

export default App