const db = require('../db');

const addBoardingRoom = async (req,res)=>{
    const formData = req.body;

    let connection;

    try {
        connection = await db.getConnection();
        await connection.beginTransaction();

        //add data to the accomodation table
        const result1 = await connection.query('INSERT INTO accommodationtb (district,address_line1,address_line2,owner_id) VALUES(?,?,?,?)', [
            formData.district,formData.addressLine1,formData.addressLine2,formData.owner_id
        ]);

        //retreive the postID
        const post_ID = result1[0].insertId;

        //add data to the price_deatail table
        await connection.query('INSERT INTO price_detailstb (advertised_price,post_id) VALUES(?,?)', [
            formData.price,post_ID
        ]);
        //add data to the boarding_room table
        await connection.query('INSERT INTO boarding_roomstb (no_bed,description,no_tenants,is_kitchen,bath_rooms,room_size,post_id) VALUES(?,?,?,?,?,?,?)', [
            formData.beds,formData.description,formData.tenant,formData.kitchen,formData.bathroom,formData.size,post_ID
        ]);

        //add data to the notify table
        await connection.query('INSERT INTO notification_tb (username,description,date,time) VALUES(?,?,?,?)',[
            formData.owner_id,formData.notifyDescription,formData.currrentDate,formData.currentTime
        ]);

        await connection.commit();
        connection.release();
        console.log('transaction is succesffuly complete postid is'+ post_ID);

        res.status(200).json({ success: true, message: 'Transaction is Complete',post_ID:post_ID });

    } catch (err) {
        await connection.rollback();
        console.log('Transaction are roolBack to the connection erros', err);
        res.status(500).json({ success: false, message: 'Transaction failed:' + err.message });
    } finally {
        connection.release();
    }
}

const uploadImageBoardingRoom = async (req,res)=>{
    const post_ID = req.query.post_ID;
    const roomImageFilename = req.files['roomImage'][0].filename;

    try {

        let boardingHouseImageFilename = null;
        let bedImageFilename = null;
        let washRoomImageFilename = null;
        let kitchenImageFilename = null;
        let additionalImageFilename = null;

        if (req.files['boardingHouseImage'] && req.files['boardingHouseImage'][0]) {
            boardingHouseImageFilename = req.files['boardingHouseImage'][0].filename;
        }

        if (req.files['bedImage'] && req.files['bedImage'][0]) {
            bedImageFilename = req.files['bedImage'][0].filename;
        }

        if (req.files['washRoomImage'] && req.files['washRoomImage'][0]) {
            washRoomImageFilename = req.files['washRoomImage'][0].filename;
        }

        if (req.files['kitchenImage'] && req.files['kitchenImage'][0]) {
            kitchenImageFilename = req.files['kitchenImage'][0].filename;
        }

        if (req.files['additionalImage'] && req.files['additionalImage'][0]) {
            additionalImageFilename = req.files['additionalImage'][0].filename;
        }

        const ImageData = { 
            roomImageFilename, 
            bedImageFilename, 
            boardingHouseImageFilename, 
            washRoomImageFilename, 
            kitchenImageFilename, 
            additionalImageFilename
         }

        await db.query('INSERT INTO boarding_room_imgtb (room_inside_img1,washroom_img,kitchen_img,room_inside_img2,room_outside_img1,room_outside_img2,room_id) VALUES (?,?,?,?,?,?,?)',[
            ImageData.roomImageFilename,ImageData.washRoomImageFilename,ImageData.kitchenImageFilename,ImageData.bedImageFilename,ImageData.boardingHouseImageFilename,ImageData.additionalImageFilename,post_ID
        ])
        console.log('image upload Succesfuuly');
        res.status(200).json({success:true,message:'Image Upload Succesfully'});
    }catch(err){
        console.log(err);
        res.status(500).json({success:false,message:'Image upload error'+err.message});
    }
}

const getBoardingRoom = async(req,res)=>{
    try {
        const sql = 'SELECT * ' +
            'FROM accommodationtb ' +
            'INNER JOIN price_detailstb ON accommodationtb.post_id = price_detailstb.post_id '+
            'INNER JOIN boarding_roomstb ON accommodationtb.post_id = boarding_roomstb.post_id '+
            'INNER JOIN boarding_room_imgtb ON boarding_roomstb.post_id = boarding_room_imgtb.room_id '+
            'ORDER BY accommodationtb.post_id DESC ' +
            'LIMIT 20';

        const result = await db.query(sql);

        res.status(200).json({success: true, message: 'result is getting successfully', postData: result });
    } catch (err) {
        console.log('cannot fetch the data from the accomadation table' + err);
        res.status(500).json({ success: false, message: 'cannot get the resul' + err.message });
    }
}

module.exports ={
    addBoardingRoom,uploadImageBoardingRoom,getBoardingRoom
}