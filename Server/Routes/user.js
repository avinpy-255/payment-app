const express = require('express');
const zod = require('zod');
const {User} = require('../database') 
const JWT_SECRET = require('../config');
const router = express.Router();

const signupSchema = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstName: zod.string(),
    password: zod.string(),
})

router.post('/signin', async (req, res) => {
  const body = req.body;
  const {success} = signupSchema.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
        message: "Email is already is in our Data/ Incorrect Inputs"
    })
  }

  const exsistingUser = User.findOne({
    username: body.username
  })

  if (exsistingUser) {
    return res.status(411).json({
        message: "Email is already in our Data"
    })
  }
  
  const user = await User.create({
    username: body.username,
    password: bcrypt.hashSync(body.password, 10),
    firstName: body.firstName,
    lastName: body.lastName,
  })

  const useerId = user._id;

  const token = jwt.sign({
    useerId
  }, JWT_SECRET);

  res.json({
    success: true,
    message: "User registered successfully",
    token,
  })
})


module.exports = router;