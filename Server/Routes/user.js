const express = require('express');
const router = express.Router();
const zod = require('zod');
const {User, Account} = require('../database')
const jwt = require('jsonwebtoken')
const{ authmiddleware} = require('../middleware');
const { JWT_SECRET } = require('../config');

const signupSchema = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string(),
})


router.post('/signup', async (req, res) => {
  const body =  req.body;
  const {success} = signupSchema.safeParse(body);

  if (!success) {
    return res.status(411).json({
      message: "Email is already is in our Data/ Incorrect Inputs"
    })
  }

  const existingUser = await User.findOne({
    username: req.body.username
  })

  if(existingUser) {
    return res.status(411).json({
      message: "Email is already in our Data"
    })
  }

  const user = await User.create({
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  })

  const userId = user._id;

  await Account.create({
    userId,
    balance: 1 + Math.random() * 10000
  })

  const token = jwt.sign({
    userId
  }, JWT_SECRET)

  res.json({
    message: "User created successfully",
    token: token,
  })
 
})


const signinSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
})

router.post('/signin', async (req, res) => {
  const body = req.body;
  const {success} = signinSchema.safeParse(body);

  if (!success) {
    return res.status(411).json({
      message: "email is already taken"
    })
  }

  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password
  })

  if (user) {
    const token = jwt.sign({
      userId: user._id
    }, JWT_SECRET)

    res.json({
      token: token
    })

    return;
  }

  res.status(411).json({
    message: "Error while logging in"
  })
  
})

const updateBody = zod.object({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
})

router.put("/", authmiddleware, async(req, res)=> {
  const { success } = updateBody.safeParse(req.body)
  if (!success) {
      res.status(411).json({
          message: "Error while updating information"
      })
  }

  await User.updateOne(req.body, {
      id: req.userId
  })

  res.json({
      message: "Updated successfully"
  })
})




module.exports = router;