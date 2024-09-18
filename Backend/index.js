
// Basic Syntaxx 
const express = require ("express")

const app = express();

app.use(express.json())

const port = 3088;

// Connecting Databas and defing Zod 
const {user} = require ('./db')
const {userzod} = require ('./type')
//Authentication
const checkuserexist = require('./user');  
const docsignup = require('./doc');  
const findDoctors = require('./finddoctors')
const druginteraction = require ('./druginteraction'); 
const jwtauthenticate = require ('./jwtauthenticate');
const medicaldata = require ('./medicaldata');

//Validation 


//Hasing 
const bcrypt = require('bcryptjs');


const cors = require ("cors");
const doctorexist = require("./doctorlogin");
const searchdoctors = require("./searchdoctors");
const appointment = require("./appoinment");
const getappoinments = require("./getappoinments");
const getDoctorDetails = require("./getDoctorDetails");
const getMedicalData = require("./getMedicalData");

app.use(cors()); 


app.get ('/' , function (req,res) {

    res.send ("Hello World")     
})


app.post ("/signup" , async function (req,res) {

     const person = req.body;
     const safeperson = userzod.safeParse(person)
        //checking the inputs is correct
     if (!safeperson.success){

        res.status(411).json ({

            msg : " Invalid Inputs "
        })
        return; 
     }
// Hashing the orignal password 
     const hashed = await bcrypt.hash(person.password, 10);
        // User is created

    await user.create( {
           
        username : person.username, 
        password : hashed, 
        age : person.age

    } )
    res.json ({

        msg : "User Created ",
    })
})


app.post ("/signin" , checkuserexist)



app.post ("/docsignup" , docsignup) 

app.get("/doctors",findDoctors)

app.post('/doctorslogin', doctorexist);

app.post ('/interaction' , druginteraction); 

app.post ('/medicaldata', jwtauthenticate, medicaldata);

app.post ('/searchdoctors', searchdoctors);

app.post ('/appoinments/:doctor' , jwtauthenticate, appointment); 

app.get ('/getappoinment' , jwtauthenticate, getappoinments);

app.get('/doctorprofile', getDoctorDetails);

app.get('/getmedicaldata', jwtauthenticate,getMedicalData);



// app.use (function (err, req,res,next){

//     if (err){
//         res.json ({
//             msg : "Something went wrong"
//         })
//     }
//     else{   
//          next();
//          }

// })

app.listen(port,()=>{
    console.log(`Server is runnin on ${port}`);
});

// images = {

//     image1 : "hello ", 
//     image2 : "kemcho "
// }



// console.log ( images.image1)

person = {

    username : "hello", 
    password : "wprd ", 
    age : 19 

}

// console.log (person.age)