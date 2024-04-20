const express = require('express');
const router = express.Router();
const getProfile = require('../models/getProfile');


router.get('/showdetails/:id',async(req,res)=>{
    const userid = req.params.id;
    console.log('userid request'+userid);

    try{
        const response = await getProfile.profileDeatails(userid);
        if(response.success){
            res.status(200).json({
                success:response.success,
                message:response.message,
                profileData:response.result
            })
        } else{
            res.status(500).json({
                success:response.success,
                message:response.message
            })
        }


    }catch(err){
        console.log("Cannot fetch the data from the backend");
    }
})

module.exports = router;