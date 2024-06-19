import React, { useContext, useEffect } from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home.jsx';
import Appointment from './pages/Appointment.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import AboutUs from './pages/AboutUs.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar.jsx"
import axios from 'axios';
import { Context } from "./main.jsx";
import Footer from './components/Footer.jsx';

function App() {
  const {isAuthenticated, setIsAuthenticated , setUser} = useContext(Context);
  useEffect(()=>{
    const fetchUser = async() => {
      try{
        const response = await axios.get("http://localhost:4000/api/v1/user/patient/me",{withCredentials:true});
        setIsAuthenticated(true);
        setUser(response.data.user);
      }catch(err){
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  },[isAuthenticated]);
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element ={<Home/>}/>
          <Route path='/appointment' element={<Appointment/>}/>
          <Route path='/about' element ={<AboutUs/>}/>
          <Route path='/register' element ={<Register/>}/>
          <Route path='/login' element ={<Login/>}/>
        </Routes>
        <Footer/>
        <ToastContainer position="top-center"/>
      </Router>
    </>
  )
}

export default App