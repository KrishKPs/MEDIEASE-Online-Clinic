const jwt = require("jsonwebtoken");

const jwtpassword = "Krish&Siddharth";

const { doctors } = require("./db");
async function getDoctorDetails(req, res) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ msg: "No token provided" });
    }
        const decoded = jwt.verify(token, jwtpassword);
        const doctor = await doctors.findOne({ username: decoded.username });

        if (!doctor) {
            return res.status(404).json({ msg: "Doctor not found" });
        }

        res.json({
            username: doctor.username,
            email: doctor.email,
            experience: doctor.experience
        });

}

module.exports = getDoctorDetails;


