import React from "react"
import Header from"./components/Header/Header"
import TopContainer from"./components/TopContainer/TopContainer"
import Skillcontainer from "./components/Skillcontainer/Skillcontainer"
import Contact from "./components/Contactcotainer/Contact"
import Login from "./components/Login/Login"
import Register from"./components/Register/Register"
import Admin from "./components/Admin/Admin"
import User from "./components/User/User"
import {Auth} from"./components/Auth"
const App=()=>{
  return(
    <div>
      < Header />
      <TopContainer />
      <Skillcontainer /> 
      <Contact />
      <Login />
      <Register />
     {Auth.user==='user' && <User />}
      <Admin />
     <Auth /> 
    </div>
  )
}
export default App