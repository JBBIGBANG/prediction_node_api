const e = require('express');
const express = require('express')
const router = express.Router()

const Data = require('../models/Data')

router.get('/', async (req, res) => {
    
    try {
        const getdata = await Data.find();
        res.json(getdata);
    } catch (error) {
        res.json({message:error})
    }
});

router.post('/', async (req, res) => {
    
    const data = new Data({
        call_type:req.body.call_type,
        date:req.body.date
    });

    try {
        const saveData = await data.save()
        res.json(saveData);
    } catch (error) {
        res.json({message:error});
    }
});



module.exports = router;