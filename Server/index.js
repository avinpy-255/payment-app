const express = require("express");
const mainRouter = require("./Routes")
const {connectDB} = require('./database')
const cors = require("cors")
const app = express();

require('dotenv').config();

app.use(cors())
app.use(express.json())



app.get('/api/v1', mainRouter);
app.listen(3000, ()=>{
    connectDB();
    console.log("Server Running on port 3000");
})




