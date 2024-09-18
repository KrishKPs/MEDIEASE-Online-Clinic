

const { appointments } = require("./db");


 async function getappoinments (req,res) {
 
    const username = req.username; 
       const appoinments = await appointments.findOne({ doctor : username })

         res.json ({
              appoinments : appoinments
         }) ; 
       
  }

  module.exports = getappoinments;   