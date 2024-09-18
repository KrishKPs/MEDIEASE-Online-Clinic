import { useParams } from "react-router-dom";

 
export function Appoinment (){

    const {doctor} = useParams () ;
          return (

            <>
            <h1> {doctor} </h1>

            <button onClick={ async () => {

const token = localStorage.getItem("token");
if (!token) {
  alert("You need to login first");
  return;
}

const encodedurl = encodeURIComponent(doctor);   
   const responce = await fetch (`http://localhost:3088/appoinments/${encodedurl}` , {

    method : "POST" ,    
    body : JSON.stringify ({}), 
    headers : {
        "Content-Type" : "application/json",
        "Authorization" : `${token}`
    } 
   }) ; 

   const data = await responce.json() ; 

   if (data.msg){
   
       alert (data.msg) ;}    

            }} > 

                Book Appointment     
            </button>
            
            </>
          ) ;
}

