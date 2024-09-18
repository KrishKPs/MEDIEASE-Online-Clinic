
const  { doctors} = require ('./db')
const bcrypt = require ('bcryptjs')

const jwt = require ("jsonwebtoken");
const jwtpassword = "Krish&Siddharth";

function GenerateJwt(person) {
    var token = jwt.sign( { username: person.username },  jwtpassword ); // Correctly include the username in the payload
      
    return token;
}



async function doctorexist (req,res) {

    const person = req.body;
       
    const userExists = await doctors.findOne({username : person.username});
  

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

module.exports = doctorexist ; 