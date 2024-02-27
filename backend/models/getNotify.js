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

module.exports = {
    getNotification
}