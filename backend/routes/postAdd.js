const express = require('express');
const addPost = require('../models/addPost');
const router = express.Router();
const upload = require('../adpath');
const getPost = require('../models/getPost');




//home page request for card boarding room
router.get('/boarding-room',async(req,res)=>{
    try{
        const response = await getPost.getBoardingRoomPost();
        if(response.success){
            res.status(200).json({
                success:true,
                postData:response.result,
                message:response.message
            });
        }else{
            res.status(500).json({
                success:false,
                message:response.message
            });
        }
        
    }catch(err){
        console.log('can not fetching a data'+err);
    }
})

//home page request for the rental-house

router.get('/rental-house',async(req,res)=>{
    console.log('getting rental house req from home page');
    try{
        const response = await getPost.getRenatalHousePost();
        if(response.success){
            res.status(200).json({
                success:true,
                postData:response.result,
                message:response.message
                
            });
        }else{
            res.status(500).json({
                success:false,
                message:response.message
            })
        }

    } catch(err) {
        console.log('cannot fetching a data'+err);
    }
})

//home page request for the boarding building

router.get('/boarding-building',async(req,res)=>{
    console.log('getting request for the boarding building');
    //here has a error in here add twice post add twcise
    try{
    const response = getPost.getBoardingBuildingPost();
    if(response.success){
        res.status(200).json({
            sucess:true,
            postData:response.result,
            message:response.message
        });
    }else{
        res.status(500).json({
            success:false,
            message:response.message
        })
    }        

    }catch(err){
        console.log('cannot fetching a data'+err);
    }
})


//handling boarding room formdata uplaod

router.post('/boarding-room', async (req, res) => {
    const formData = req.body;
    console.log(formData);
    try {
        const result = await addPost.CreateBoardingRoom(formData);
        if (result.success) {
            console.log('my post id is ', result.post_ID);
            res.status(200).json({
                success: true,
                message: result.message,
                post_ID: result.post_ID
            });
        } else {
            console.log('fail');
            res.status(500).json({
                success: false,
                message: result.message
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Can not send data to the databse' + err });
    }
})

// Route for handling image upload

router.post('/boarding-room/upload', upload.fields([
    { name: 'boardingHouseImage', maxCount: 1 },
    { name: 'roomImage', maxCount: 1 },
    { name: 'bedImage', maxCount: 1 },
    { name: 'washRoomImage', maxCount: 1 },
    { name: 'kitchenImage', maxCount: 1 },
    { name: 'additionalImage', maxCount: 1 }
]), async (req, res) => {

    const post_ID = req.query.post_ID;
    const roomImageFilename = req.files['roomImage'][0].filename;

    try {

        let boardingHouseImageFilename = null;
        let bedImageFilename = null;
        let washRoomImageFilename = null;
        let kitchenImageFilename = null;
        let additionalImageFilename = null;

        if (req.files['boardingHouseImage'] && req.files['boardingHouseImage'][0]) {
            boardingHouseImageFilename = req.files['boardingHouseImage'][0].filename;
        }

        if (req.files['bedImage'] && req.files['bedImage'][0]) {
            bedImageFilename = req.files['bedImage'][0].filename;
        }

        if (req.files['washRoomImage'] && req.files['washRoomImage'][0]) {
            washRoomImageFilename = req.files['washRoomImage'][0].filename;
        }

        if (req.files['kitchenImage'] && req.files['kitchenImage'][0]) {
            kitchenImageFilename = req.files['kitchenImage'][0].filename;
        }

        if (req.files['additionalImage'] && req.files['additionalImage'][0]) {
            additionalImageFilename = req.files['additionalImage'][0].filename;
        }

        const ImageData = { 
            roomImageFilename, 
            bedImageFilename, 
            boardingHouseImageFilename, 
            washRoomImageFilename, 
            kitchenImageFilename, 
            additionalImageFilename
         }


        const result = await addPost.UploadImageBoardingRoom(ImageData, post_ID);
        if (result.success) {
            res.status(200).json({
                success: true,
                message: result.message
            })
        } else {
            res.status(500).json({
                success: false,
                message: result.message
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'photos cannot upload to the database' + err });
    }

});



module.exports = router;

