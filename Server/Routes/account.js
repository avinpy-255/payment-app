const express = require('express');
const {authmiddleware} = require('../middleware')
const {Account} =  require('../database');
const mongoose = require('mongoose');

const router = express.Router();

router.get('/balance', authmiddleware, async (req, res) => {
    const account = await Account.findOne({
        userId: req.user.Id
    })

    res.json({
        balance: account.balance
    })
})

router.post("/transfer", authmiddleware, async (req, res) => {
    const session = await mongoose.startSession();

    session.startTransaction();
    const {amount, to} = req.body;

    const account = await Account.findOne({userId: req.userId}).session(session);

    if(!account || account.balance < amount){
        await session.abortTransaction()
        return res.status(400).json({
            message: "Insufficient funds"
        })
    }

    const toAccount = await Account.findOne({userId: to}).session(session);

    if(!toAccount){
        await session.abortTransaction()
        return res.status(400).json({
            message: "Invalid recipient"
        })
    }


    //transfer performer
    await Account.updateOne({userId: req.userId }, {$inc: {balance: amount}}).session(session);
    await Account.updateOne({userId: to }, {$inc: {balance: -amount}}).session(session);
 
    //validate the transaction
    await ServiceWorkerRegistration.commitTransaction();
    
    res.json({
        message: "Transfer Successful"
    })
})

module.exports = router;