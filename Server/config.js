require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;
const ORIGIN = process.env.ORIGIN;

module.exports = {
    JWT_SECRET,
    MONGO_URI,
    PORT,
    ORIGIN
};

