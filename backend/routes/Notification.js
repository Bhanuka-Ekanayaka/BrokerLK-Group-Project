const express = require('express');
const router = express.Router();
const getNotify = require('../models/getNotify');

router.put('/details/update/:id', async (req, res) => {
    try {
        const notifyid = req.params.id;
        console.log('this is a id', notifyid);

        const response = await getNotify.notifyRead(notifyid);
        if (response.success) {
            res.status(200).json({
                success: true,
                message: response.message,
                result: response.result
            })
        } else {
            res.status(500).json({
                success: false,
                message: response.message
            })
        }

    } catch (err) {
        console.log('cannot update a notify table' + err);
    }
})

router.put('/details/update-all/:id', async (req, res) => {
    try {
        const username = req.params.id;
        console.log('get the username', username);
        const response = await getNotify.notifyAllRead(username);
        if (response.success) {
            res.status(200).json({
                success: true,
                message: response.message,
                result: response.result
            })
        } else {
            res.status(500).json({
                success: false,
                message: response.message
            })
        }
    } catch (err) {
        console.log('cannot all notification mark as read' + err);
    }
})

router.delete('/details/delete/:id', async (req, res) => {
    try {
        const notifyID = req.params.id;
        console.log('notify id for delete', notifyID);

        const response = await getNotify.notifyDelete(notifyID);

        if (response.success) {
            res.status(200).json({
                success: true,
                message: response.message,
                result: response.result
            })
        } else {
            res.status(500).json({
                success: false,
                message: response.message
            })
        }

    } catch (err) {
        console.log('cannot delete the notification' + err);
    }
})

router.delete('/details/delete-all/:id', async (req, res) => {
    try {
        const username = req.params.id;
        const response = await getNotify.notifyAllDelete(username);
        if (response.success) {
            res.status(200).json({
                success: true,
                message: response.message,
                result: response.result
            })
        } else {
            res.status(500).json({
                success: false,
                message: response.message
            })
        }
    } catch (err) {
        console.log('cannot delete the read notofy' + err);
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