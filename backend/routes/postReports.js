const express = require('express');
const createReport = require('../models/reports');
const router = express.Router();

router.post('/create',async(req,res)=>{
    const {name, email, reason, description} = req.body;

    try{
        const result = await createReport(name,email,reason,description);

        if(result.insertID>0){
            res.status(201).json({ success: true });
        }else{
            res.status(404).json({message: 'failed'})
        }
    }catch(err){
        console.error(err.stack); 
        res.status(500).json({ success: false, err: 'Internal Server Error' });
    }
});

module.exports=router;
