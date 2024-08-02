const express = require("express");
const mainRouter = require("./Routes/index");
const { connectDB } = require("./database");
const cors = require("cors");
const { PORT, ORIGIN } = require("./config");
const app = express();

app.use (cors( {
  origin: `${ORIGIN}`,
  methods: ["GET", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
}))

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

app.use("/api/v1", mainRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
