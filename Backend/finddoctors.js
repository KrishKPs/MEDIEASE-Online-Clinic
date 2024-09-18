const {doctors}  = require("./db") 

 async function findDoctors (req,res) {
    
    const alldoctors = await doctors.find({})
    // const usernames = alldoctors.map(doctors => doctors.username);

    res.json ({
         alldoctors
    })
 }

 module.exports = findDoctors; 