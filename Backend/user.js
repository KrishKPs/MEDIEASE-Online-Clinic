const {user} = require ('./db')
const bcrypt = require ('bcryptjs')

const jwt = require ("jsonwebtoken");
const jwtpassword = "Krish&Siddharth";


function GenerateJwt (person) {

       var token = jwt.sign ({username : person.username } , jwtpassword)
   
   return token ; 
   }

async function checkuserexist (req,res,next ) {
       const person = req.body;
       
       const userExists = await user.findOne({username : person.username});
     

       if(!userExists){

          return res.status(411).json ({
                msg : "User not Found"
            })
       }
       
       const checkpass = await bcrypt.compare (person.password , userExists.password); 
    
        if(!checkpass){
                     return res.status(411).json ({
                            msg : "Password is Incorrect "
                     })
              }
              const token = GenerateJwt(person)
   res.json ({
       msg : "Entered You ", 
       token : token

   })
}



module.exports = checkuserexist;