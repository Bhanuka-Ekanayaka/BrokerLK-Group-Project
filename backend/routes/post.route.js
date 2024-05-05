const express = require('express');
const { addBoardingRoom, uploadImageBoardingRoom,getBoardingRoom } = require('../controllers/postController')
const router = express.Router();
const upload = require('../adpath');

router.get('/boarding-room',getBoardingRoom);



router.post("/boarding-room", addBoardingRoom);
router.post("/boarding-room/upload", upload.fields([
    { name: 'boardingHouseImage', maxCount: 1 },
    { name: 'roomImage', maxCount: 1 },
    { name: 'bedImage', maxCount: 1 },
    { name: 'washRoomImage', maxCount: 1 },
    { name: 'kitchenImage', maxCount: 1 },
    { name: 'additionalImage', maxCount: 1 }]), uploadImageBoardingRoom);


module.exports = router;