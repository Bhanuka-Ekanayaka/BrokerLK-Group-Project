const db = require('../db');


const getNotification = async (userid) => {
    try {

        const sql = `SELECT * FROM notification_tb WHERE username=${userid} ORDER BY notify_id DESC`;

        const result = await db.query(sql);

        return { success: true, message: 'fetch the data from the table', result: result };

    } catch (err) {
        console.log('cannot get the data from the notify table' + err);

        return { success: false, message: 'cannot fetch data from the table' };
    }
}

const notifyRead = async (notifyid) => {
    try {
        const sql = `UPDATE notification_tb SET mark_as_read = 1 WHERE notify_id=${notifyid}`;
        const result = await db.query(sql);
        return { success: true, message: 'update your notificstion table' }

    } catch (err) {
        console.log('cannot update a notify table' + err);
        return { success: false, message: 'cannot update notification table' }
    }
}

module.exports = {
    getNotification,
    notifyRead
}