import { useEffect, useState } from "react";
import { Doctors_info } from "../Components/Doctors_info";


export function Doctorspage () {

    const [username , setusername ] = useState('')
    const [doctors , setdoctors] = useState([])

    useEffect (() => { fetch('http://localhost:3088/searchdoctors' , {
      method  : "POST", 
      headers : {
        'Content-Type' : 'application/json'
      }, 
      body : JSON.stringify({
        filter : username
      })
    })
    .then(response => response.json())
    .then(data => {
      setdoctors(data.filtereddoctors); // Set the usernames in state
    });},[username])


       
      
    return (

        <>
      <input type="text" placeholder="Search" className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={ (e) => {
        setusername(e.target.value);
      }}/>

        <div className=" grid grid-cols-3 gap-4">  {doctors.map ((doctor , index) => <Doctors_info key={index}  doctor = {doctor}/>)}  </div>
     
      
        
        </>
    );
}
