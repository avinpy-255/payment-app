const express = require("express");
const mainRouter = require("./Routes/index")
const cors = require("cors")

app.use(cors())
const app = express();
app.use(express.json())

app.get('/api/v1', mainRouter);
app.listen(3000)




