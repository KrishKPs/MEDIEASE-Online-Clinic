

const {doctors}  = require("./db")
const {doctorzod } = require ('./type')
const bcrypt = require('bcryptjs');


async function docsignup  (req,res) {

    const person = req.body 
    const safePerson = doctorzod.safeParse(person);

    if(!safePerson.success){
        res.status(411).json({
            msg : "Username is invalid"
        })
        return ; 
    } 
    
    const hashed = await bcrypt.hash(person.password,10);

          
   
    await  doctors.create({
    username : person.username,
    email : person.email , 
      password : hashed,
      experience : person.experience
   })

   res.json({
    msg : "Doctor aii gayo chee!!!!"
   })

   

}

module.exports = docsignup ; 