const { Medicaldata } = require('./db');


async function medicaldata(req, res) {
    try {
        const data = req.body;

        // Ensure correct field mapping and include required fields
        await Medicaldata.create({
            username: req.username, // Ensure username is being provided, if required
            name: data.name,    // Map 'bimari' to the correct field in the request body
            sex : data.sex, 
            address : data.address,
            occupation : data.occupation,
            bloodgroup : data.bloodgroup,
            height : data.height,
            weight : data.weight
            

        });

        res.json({
            msg: "Data Stored"
        });
    } catch (error) {
        console.error("Error storing medical data:", error);
        res.status(500).json({ msg: "Server error", error: error.message });
    }
}

module.exports = medicaldata;
