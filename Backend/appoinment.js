

// const {user} = require ('./db')    
// const doctors = require ('./db')  
const {appointments} = require ('./db');    
const {Medicaldata} = require('./db');

async function appointment (req , res){


     const doctor = req.params.doctor ; 
     const username = req.username ; 

     if (!doctor){
         res.status(411).json({
             msg : "Doctor is not selected"
         })
         return ; 
     }   
     if (!username){
         res.status(411).json({
             msg : "User is not selected"
         })
         return ; 
     }   

   const data =  await Medicaldata.findOne({username : username})   

   if (!data){
       res.status(411).json({
           msg : "User does not exist"
       })
       return ; 
   }     
   
   await appointments.create ({

    username : username ,    
    doctor : doctor ,    
    data : {
        name : data.name , 
        sex : data.sex, 
        address : data.address ,     
        occupation : data.occupation ,   
        bloodgroup : data.bloodgroup ,   
        height : data.height ,   
        weight : data.weight          
    }

   })

   res.json ({
    msg : "Appointment is fixed" 
   })

}

module.exports = appointment ;       // Exporting the function so that it can be used in other files.    