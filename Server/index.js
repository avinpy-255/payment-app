const express = require("express");
const mainRouter = require("./Routes/index")
const {connectDB} = require('./database')
const cors = require("cors")
const app = express();

require('dotenv').config();

app.use(cors())
app.use(express.json())



app.use('/api/v1', mainRouter);

app.listen(8080, ()=>{
    connectDB();
    console.log("Server Running on port 8080");
})




