const jwt = require('jsonwebtoken');

async function jwtauthenticate(req, res, next) {
    const token = req.headers.authorization;
    

    if (!token) {
        return res.status(401).json({
            msg: "Token is Required"
        });
    }

    try {
        const decode = jwt.verify(token, "Krish&Siddharth");
        
        req.username = decode.username; // Attach the username to the request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        return res.status(403).json({
            msg: "Invalid token"
        });
    }
}

module.exports = jwtauthenticate;
