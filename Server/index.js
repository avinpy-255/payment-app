const express = require("express");
const mainRouter = require("./Routes/index");
const { connectDB } = require("./database");
const cors = require("cors");
const { PORT } = require("./config");
const app = express();

// CORS configuration
const corsOptions = {
    origin: ["https://payment-app-frontend-six.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
  };
  
  // Apply CORS middleware
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

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
