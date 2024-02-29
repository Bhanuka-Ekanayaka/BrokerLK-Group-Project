const express = require('express');
const router = express.Router();
const getNotify = require('../models/getNotify');

router.put('/details/update/:id',async(req,res)=>{
    try{
        const notifyid= req.params.id;
        console.log('this is a id',notifyid);
       
        const response = await getNotify.notifyRead(notifyid);
        if(response.success){
            res.status(200).json({
                success:true,
                message:response.message
            })
        }else{
            res.status(500).json({
                success:false,
                message:response.message
            })
        }

    }catch(err){
        console.log('cannot update a notify table'+err);
    }
})



router.get('/details/:id', async (req, res) => {
    try {
        const userid = req.params.id;
        console.log('request getting here');
        const response = await getNotify.getNotification(userid);

        if (response.success) {
            res.status(200).json({
                success: true,
                message: response.message,
                result: response.result
            })
        } else {
            res.status(500).json({
                success: false,
                message: response.message,
                result: response.result
            })
        }

    } catch (err) {
        console.log('cannot get the notifications' + err);
    }
})

module.exports = router;