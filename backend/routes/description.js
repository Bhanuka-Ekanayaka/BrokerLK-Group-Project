const express = require('express');
const router = require('./adRoutes');
const Route = express.Router();
const getdetails = require('../models/getdetails');


Route.get('./boarding-room', async(req ,res)=>{
    console.log('get request come to the backend');
    try{
        const response = await getdetails.boarding_building();
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
});

Route.get('./rental-house', async(req ,res)=>{
    console.log('get request come to the backend');
    try{
        const response = await getdetails.renatalHouse();
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
});

Route.get('./boarding-building', async(req ,res)=>{
    console.log('get request come to the backend');
    try{
        const response = await getdetails.BoardingRoom();
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
});

module.exports = router;