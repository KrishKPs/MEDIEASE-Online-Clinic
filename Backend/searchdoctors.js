const { doctors } = require("./db");

async function searchdoctors (req,res) {
  
    const {filter} = req.body ; 

    console.log(filter);


    let filterdoctors ; 
if (!filter) {
   filterdoctors = await doctors.find ({}) 
} else {
   filterdoctors =  await doctors.find ({

        $or : [ {

             username : { $regex : filter} 
        }]
    })
}

res.json ({

    filtereddoctors : filterdoctors 
})
  

}

module.exports = searchdoctors ;