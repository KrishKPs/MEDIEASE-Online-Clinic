const { Medicaldata } = require('./db');

async function getMedicalData(req, res) {
    const username = req.username; // Get username from request object set by jwtauthenticate

    // Fetch medical data for the logged-in user
    const data = await Medicaldata.findOne({ username: username });

    if (!data) {
        return res.status(404).json({ msg: "Medical data not found" });
    }

    res.json({
        medicalRecord: data
    });
}

module.exports = getMedicalData;
