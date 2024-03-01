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
        return { success: true, message: 'update your notificstion table',result:result}

    } catch (err) {
        console.log('cannot update a notify table' + err);
        return { success: false, message: 'cannot update notification table' }
    }
}

const notifyAllRead = async (username) => {
    try{
        const sql = `UPDATE notification_tb SET mark_as_read = 1 WHERE username = ${username}`;
        const result = await db.query(sql);
        return {success:true,message:'Update all notification as read',result:result}
    }catch(err){
        console.log('cannot insert a notification table'+err);
        return {success:false,message:'cannot update all notify mark as read'}
    }
}

const notifyDelete = async (notifyid) => {
    try{
        const sql =`DELETE FROM notification_tb WHERE notify_id = ${notifyid}`;
        const result = await db.query(sql);
        return {success:true,message:'notification is deleted',result:result}
    }catch(err){
        console.log('cannot delete notify from the table'+err);
        return {success:false,message:'notification cannot delete'}
    }
}

const notifyAllDelete = async (username) => {
    try{
        const sql = `DELETE FROM notification_tb WHERE mark_as_read = 1 AND username = ${username}`;
        const result = await db.query(sql);
        return {success:true,message:'read all notify are deleted',result:result}
    }catch(err){
        console.log('cannot delete the all notify read'+err);
        return {success:true,message:'cannot delete all read notify'}
    }
}



module.exports = {
    getNotification,
    notifyRead,
    notifyDelete,
    notifyAllRead,
    notifyAllDelete
}