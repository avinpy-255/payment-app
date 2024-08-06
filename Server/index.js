const express = require("express");
const mainRouter = require("./Routes/index");
const { connectDB } = require("./database");
const cors = require("cors");
const { PORT } = require("./config");
const app = express();
//updated the env variable
app.use(express.json());
app.use (cors({
  origin: "http://localhost:5173",
  methods: ["GET", "HEAD", "POST", "PUT", "DELETE"]
}))

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

app.use("/api/v1",  mainRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
