const {JWT_SECRET} = require('./config');
const jwt = require('jsonwebtoken');

const authmiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json("No token provided");
    }

    const token  = authHeader.split(' ')[1];

    try{
        const decoded = jwt.verify(token, JWT_SECRET);

        req.userId = decoded.userId;

        next()
    } catch(err){
        return res.status(403).json({ error: 'Invalid token' });
    }
}

module.exports ={
    authmiddleware
};