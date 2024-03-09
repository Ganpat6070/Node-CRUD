const express = require('express');
const router = new express.Router();
const MensRanking = require('../models/schema');


router.post('/mens', async (req, res)=>{
    try{
        //Method 1
        // const addingMensRecords = new MensRanking(req.body);
        // console.log(req.body);
        // const insertMens = await addingMensRecords.save();
        // res.status(201).send(insertMens);

        // Method 2 ( Easy to remember )
        const addingMensRecords = MensRanking.create(req.body);
        // console.log(req.body);
        res.status(201).send(addingMensRecords);
    }catch(e){
        res.status(400).send(e);
    }
})

router.get('/mens', async (req, res)=>{
    try{
        const getMens = await MensRanking.find({}).sort({"ranking": 1})
        res.send(getMens);
    }catch(e){
        res.status(400).send(e);
    }
})

router.get('/mens/:id', async (req, res)=>{
    try{
        const _id = req.params.id;
        const getMens = await MensRanking.findById(_id);
        res.send(getMens);
    }catch(e){
        res.status(400).send(e);
    }
})

router.post('/mens/:id', async (req, res)=>{
    try{
        // const _id = req.params.id;      Method 1 is the commented but method 2 below is great
        // const getMens = await MensRanking.findByIdAndUpdate(_id, req.body, {  
        const getMens = await MensRanking.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.send(getMens);
    }catch(e){
        res.status(500).send(e);
    }
})

router.post('/deletemens/:id', async (req, res)=>{
    try{
        const getMens = await MensRanking.findByIdAndDelete(req.params.id);
        res.send(getMens);
    }catch(e){
        res.status(500).send(e);
    }
})

module.exports = router;