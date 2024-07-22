const express = require("express");
const mainRouter = require("./Routes")
const cors = require("cors")

app.use(cors())
app.use(express.json())
const app = express();


app.get('/api/v1', mainRouter);
app.listen(3000, ()=>{
    connectDB();
    console.log("Server Running on port 3000");
})




