import { useState } from 'react'
import './App.css'

import Header from "./components/Nav"
import SignIn from "./components/Sign-in-form"
function App() {

  return (
    <div className="app">
   <Header></Header>
   <SignIn></SignIn>
     </div>
      
      
  )
}

export default App
