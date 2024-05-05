const express = require('express');
const {notifyRead,notifyAllRead,notifyDelete,notifyAllDelete,getNotify} = require('../controllers/notifyController');
const router = express.Router();

router.get('/details/:id',getNotify);
router.put('/details/update/:id',notifyRead);
router.put('/details/update-all/:id',notifyAllRead);
router.delete('/details/delete/:id',notifyDelete);
router.delete('/details/delete-all/:id',notifyAllDelete);



module.exports = router;