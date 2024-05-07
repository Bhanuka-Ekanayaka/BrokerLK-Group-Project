const express = require('express');
const { addBoardingRoom, uploadImageBoardingRoom,getBoardingRoom,addRentalHouse,uploadImageRentalHouse,getRentalHouse } = require('../controllers/postController')
const router = express.Router();
const upload = require('../adpath');

router.get('/boarding-room',getBoardingRoom);
router.get('/rental-house',getRentalHouse);



router.post('/rental-house',addRentalHouse);
router.post('/rental-house/upload',upload.fields([
    {name:'rentalHouseImage',maxCount:1},
    {name:'room1Image',maxCount:1},
    {name:'room2Image',maxCount:1},
    {name:'room3Image',maxCount:1},
    {name:'bedImage',maxCount:1},
    {name:'washRoomImage',maxCount:1},
    {name:'gateImage',maxCount:1},
    {name:'kitchenImage',maxCount:1},
    {name:'additionalImage',maxCount:1}
]),uploadImageRentalHouse);

router.post("/boarding-room", addBoardingRoom);
router.post("/boarding-room/upload", upload.fields([
    { name: 'boardingHouseImage', maxCount: 1 },
    { name: 'roomImage', maxCount: 1 },
    { name: 'bedImage', maxCount: 1 },
    { name: 'washRoomImage', maxCount: 1 },
    { name: 'kitchenImage', maxCount: 1 },
    { name: 'additionalImage', maxCount: 1 }]), uploadImageBoardingRoom);


module.exports = router;