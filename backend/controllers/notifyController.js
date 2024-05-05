const db = require('../db');

const getNotify = async(req,res)=>{
    const notifyid = req.params.id;
    
    try{
        const sql = `SELECT * FROM notification_tb WHERE username=${notifyid}`;
        const result = await db.query(sql);
        res.status(200).json({success:true,message:"Get the notofication",result:result});
    }catch(err){
        console.log(err);
        res.status(500).json({success:true,message:"cannot fetrch the notify"});
    }

}

const notifyRead = async(req,res)=>{
    const notifyid = req.params.id;
    try {
        const sql = `UPDATE notification_tb SET mark_as_read = 1 WHERE notify_id=${notifyid}`;
        const result = await db.query(sql);
        res.status(200).json({success: true, message: 'update your notificstion table',result:result});

    } catch (err) {
        console.log('cannot update a notify table' + err);
        res.status(500).json({ success: false, message: 'cannot update notification table'})
    }
}

const notifyAllRead = async(req,res)=>{
    const username = req.params.id;
    try{
        const sql = `UPDATE notification_tb SET mark_as_read = 1 WHERE username = ${username}`;
        const result = await db.query(sql);
        res.status(200).json({success:true,message:'Update all notification as read',result:result});
    }catch(err){
        console.log('cannot insert a notification table'+err);
        res.status(500).json({success:false,message:'cannot update all notify mark as read'});
    }
}

const notifyDelete = async(req,res)=>{
    const notifyID = req.params.id;
    try{
        const sql =`DELETE FROM notification_tb WHERE notify_id = ${notifyID}`;
        const result = await db.query(sql);
        res.status(200).json({success:true,message:'notification is deleted',result:result});
    }catch(err){
        console.log('cannot delete notify from the table'+err);
        res.status.json({success:false,message:'notification cannot delete'});
    }
}

const notifyAllDelete = async (req,res)=>{
    const username = req.params.id;
    try{
        const sql = `DELETE FROM notification_tb WHERE mark_as_read = 1 AND username = ${username}`;
        const result = await db.query(sql);
        res.status(200).json({success:true,message:'read all notify are deleted',result:result});
    }catch(err){
        console.log('cannot delete the all notify read'+err);
        res.status(500).json({success:true,message:'cannot delete all read notify'});
    }
}

module.exports ={
    notifyRead,notifyAllRead,notifyDelete,notifyAllDelete,getNotify
}