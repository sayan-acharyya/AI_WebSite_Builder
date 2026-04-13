import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Pages/Home'
import toast, { Toaster } from 'react-hot-toast';
import userGetCurrentuser from './hooks/userGetCurrentuser';


export const serverUrl = "http://localhost:8000/api"

const App = () => {
  userGetCurrentuser();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Toaster position="top-center" />
      </BrowserRouter>
    </>
  )
}

export default App