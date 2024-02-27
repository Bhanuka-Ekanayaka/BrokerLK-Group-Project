const express = require('express');
const router = express.Router();
const getNotify = require('../models/getNotify');

router.get('/details/:id', async (req, res) => {
    try {
        const userid = req.params.id;

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