import { useState } from 'react'
import { Navbar } from './Components/Navbar'
import { BrowserRouter, Route, Routes,   } from 'react-router-dom';

import './App.css'
import { Login } from './Pages/Login';
import { Signin } from './Pages/Signin';
import { Homepage } from './Pages/Homepage';
import { Home } from './Components/Home';
import { Doctorspage } from './Pages/Doctors';
import { Doctor_Registeration } from './Pages/Doctor_Registeration';
import { Doctorslogin } from './Pages/Doctorslogin';
import {Medicaldata} from "./Pages/Medicaldata";
import { Interaction } from './Components/Interaction';
import { Appoinment } from './Pages/Appoinment';
import { Doctors_landing } from './Pages/Doctors_landing';

function App() {



  return (

    <>
 
      <div className= "bg:black">
    <BrowserRouter>
        <Navbar />
        <Home/> 

    <Routes>

      <Route path='/signup' element = {<Login/> }/> 
      <Route path='/signin' element = {<Signin/>} /> 
      <Route path='/homepage' element= {<Homepage/>} /> 
      <Route path='doctors' element = {<Doctorspage/>}/> 
      <Route path='doctorsregistration' element = {<Doctor_Registeration/>}/> 
      <Route path='doctorslogin' element = {<Doctorslogin/>}/> 
      <Route path='medicaldata' element = {<Medicaldata/>}/> 
      <Route path='/' element = {<Home/>}/>
      <Route path = '/interaction' element = {<Interaction/>}/>
      <Route path = '/appoinment/:doctor' element = {<Appoinment/>}/>
      <Route path = '/doctors-dashboard' element = {<Doctors_landing/>}/>



    </Routes>
    
    
    
    </BrowserRouter>
    </div>
    </>
  ) ; 
  
}





export default App
