import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import { ToastContainer, toast } from 'react-toastify';
import Home from "./components/Home";
import Food from "./components/Food";

function App() {

  return (<>
    <BrowserRouter>
      <div className="app">
      
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/food" element={<Food/>}></Route>
          <Route path="/signin" element={<SignIn/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
        </Routes>
        <ToastContainer theme='light'></ToastContainer>
       
      </div>
      
   
    </BrowserRouter>

    

  </>

  )
}

export default App
