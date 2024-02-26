const db = require('../db');

const getBoardingRoomPost = async () => {

    try {
        const sql = 'SELECT * ' +
            'FROM accommodationtb ' +
            'INNER JOIN price_detailstb ON accommodationtb.post_id = price_detailstb.post_id '+
            'INNER JOIN boarding_roomstb ON accommodationtb.post_id = boarding_roomstb.post_id '+
            'INNER JOIN boarding_room_imgtb ON boarding_roomstb.post_id = boarding_room_imgtb.room_id '+
            'ORDER BY accommodationtb.post_id DESC ' +
            'LIMIT 20';

        const result = await db.query(sql);

        return { success: true, message: 'result is getting successfully', result: result }
    } catch (err) {
        console.log('cannot fetch the data from the accomadation table' + err);
        return { success: false, message: 'cannot get the resul' + err.message }
    }
}

const getRenatalHousePost = async () => {
    try{
        const sql ='SELECT * ' +
                   'FROM accommodationtb '+
                   'INNER JOIN price_detailstb ON accommodationtb.post_id = price_detailstb.post_id '+
                   'INNER JOIN rental_housetb ON accommodationtb.post_id = rental_housetb.post_id '+
                   'INNER JOIN rental_house_imgtb ON rental_housetb.post_id = rental_house_imgtb.reantal_id '+
                   'INNER JOIN compartmenttb ON rental_housetb.post_id = compartmenttb.post_id '+
                   'INNER JOIN house_room_imgtb ON compartmenttb.room_id = house_room_imgtb.room_id '+
                   'ORDER BY accommodationtb.post_id DESC '+
                   'LIMIT 20';

        const result = await db.query(sql);

        return {success:true,message:'result is getting successfully',result:result}

    }catch(err){
        console.log('cannot fectch the data from the accomadation table'+err);
        return {success:false, message:'cannot get the renatalhouse post' + err.message}
    }
}

const getBoardingBuildingPost = async () =>{
    try{
        const sql='SELECT * '+
                  'FROM accommodationtb '+
                  'INNER JOIN price_detailstb ON accommodationtb.post_id = price_detailstb.post_id '+
                  'INNER JOIN boarding_buildingtb ON accommodationtb.post_id = boarding_buildingtb.post_id '+
                  'INNER JOIN building_imagetb ON boarding_buildingtb.post_id = building_imagetb.building_id '+
                  'INNER JOIN boarding_roomstb ON boarding_buildingtb.post_id = boarding_roomstb.post_id '+
                  'INNER JOIN boarding_room_imgtb ON boarding_roomstb.post_id = boarding_room_imgtb.room_id '+
                  'ORDER BY accommodationtb.post_id DESC '+
                  'LIMIT 20';

        const result = await db.query(sql);

        return {success:true,message:'result is getting successfully',result:result}

    } catch(err) {
        console.log('cannot fetch the data from the accomodation table'+err);
        return {success:false,message:'cannot get the Boarding Building Post' + err.message}
    }
}

module.exports = {
    getBoardingRoomPost,
    getRenatalHousePost,
    getBoardingBuildingPost
}