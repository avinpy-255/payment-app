const express = require("express");
const userRouter = require("./user")
const accountRouter = require("./account")
const router = express.Router();
const cors = require("cors")
const app = express();

app.use(
    cors(
  {    origin: ["https://payment-app-frontend-six.vercel.app"],
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: true, // enable cookies in requests
  }
    )
  );
  app.use(express.json());
  
  app.get("/", (req, res) => {
    res.json({
      message: "Hello World2",
    });
  });

router.use("/user", userRouter);
router.use("/account", accountRouter);

module.exports = router;