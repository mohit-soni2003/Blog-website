import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Home from "./components/Home";
import Food from "./components/Food";
import Fashion from "./components/Fashion";
import CreateBlog from "./components/CreateBlog";
import { ToastContainer, toast } from 'react-toastify';
import Technology from './components/Technology';
import Sports from './components/Sports';
import Travel from './components/Travel';
import Entertainment from './components/Entertainment';

function App() {

  return (<>
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/categories/food" element={<Food />}></Route>
          <Route path="/categories/fashion" element={<Fashion/>}></Route>
          <Route path="/categories/technology" element={<Technology/>}></Route>
          <Route path="/categories/sports" element={<Sports/>}></Route>
          <Route path="/categories/travel" element={<Travel />}></Route>
          <Route path="/categories/entertainment" element={<Entertainment />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/createblog" element={<CreateBlog />}></Route>
        </Routes>
        
        <ToastContainer theme='light'></ToastContainer>
      </div>
    </BrowserRouter>



  </>

  )
}

export default App
