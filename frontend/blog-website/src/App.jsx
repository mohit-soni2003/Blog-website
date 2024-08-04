import React, { useState, createContext } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Home from "./components/Home";
import Nav from "./components/Nav"
import Food from "./components/Food";
import Fashion from "./components/Fashion";
import CreateBlog from "./components/CreateBlog";
import { ToastContainer, toast } from 'react-toastify';
import Technology from './components/Technology';
import Sports from './components/Sports';
import Travel from './components/Travel';
import Modal from "./components/Modal"
import Entertainment from './components/Entertainment';
import Blog from './components/Blog';
import Allblogs from './components/Allblogs';
import Userprofile from './components/Userprofile';
import Profile from './components/Profile';
import { LoginContext } from './context/LoginContext';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { GoogleOAuthProvider } from '@react-oauth/google';



function App() {
  const [userLogin, setuserLogin] = useState(false)
  const [modalopen, setmodalopen] = useState(false)
  return (<>
    <BrowserRouter>
      <div className="app" >
        <GoogleOAuthProvider clientId="846610058108-ihr4gucasi173dusjnesucoguvupo6nl.apps.googleusercontent.com">

          <LoginContext.Provider value={{ setuserLogin, setmodalopen }}>
            <Nav login={userLogin}></Nav>

            {modalopen && <Modal></Modal>}
            { }
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/categories/food" element={<Food />}></Route>
              <Route path="/categories/fashion" element={<Fashion />}></Route>
              <Route path="/categories/technology" element={<Technology />}></Route>
              <Route path="/categories/sports" element={<Sports />}></Route>
              <Route path="/categories/travel" element={<Travel />}></Route>
              <Route path="/categories/entertainment" element={<Entertainment />}></Route>
              <Route path="/signin" element={<SignIn />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
              <Route path="/createblog" element={<CreateBlog />}></Route>
              <Route path="/blog" element={<Blog />}></Route>
              <Route path="/allblogs" element={<Allblogs />}></Route>
              <Route exact path="/profile" element={<Profile />}></Route>
              <Route path="/profile/:userid" element={<Userprofile />}></Route>

            </Routes>

            <ToastContainer theme='light'></ToastContainer>
          </LoginContext.Provider>
        </GoogleOAuthProvider>
      </div>
    </BrowserRouter>



  </>

  )
}

export default App
