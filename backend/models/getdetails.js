const db = require('../db');

const boarding_building = async() =>{
    
    try {
        const sql = 'SELECT accommodationtb.post_id ,  accommodationtb.district, accommodationtb.house_no, accommodationtb.address_line1,accommodationtb.address_line2,boarding_buildingtb.no_rooms,boarding_buildingtb.description from accommodationtb join boarding_buildingtb on accommodationtb.post_id = boarding_buildingtb.post_id ';

        const result = await db.query(sql);

        console.log('result');

        return { success: true, message: 'result is getting success fully', result: result }
    } catch (err) {
        console.log('cannot fetch the data from the accomadation table' + err);
        return { success: false, message: 'cannot get the resul' + err.message }
    }
}

const renatalHouse = async() =>{
    
    try {
        const sql = 'SELECT accommodationtb.post_id ,  accommodationtb.district, accommodationtb.house_no, accommodationtb.address_line1,accommodationtb.address_line2,boarding_buildingtb.no_rooms,boarding_buildingtb.description from accommodationtb join boarding_buildingtb on accommodationtb.post_id = boarding_buildingtb.post_id ';

        const result = await db.query(sql);

        console.log('result');

        return { success: true, message: 'result is getting success fully', result: result }
    } catch (err) {
        console.log('cannot fetch the data from the accomadation table' + err);
        return { success: false, message: 'cannot get the resul' + err.message }
    }
}

const BoardingRoom = async() =>{
    
    try {
        const sql = 'SELECT accommodationtb.post_id ,  accommodationtb.district, accommodationtb.house_no, accommodationtb.address_line1,accommodationtb.address_line2,boarding_buildingtb.no_rooms,boarding_buildingtb.description from accommodationtb join boarding_buildingtb on accommodationtb.post_id = boarding_buildingtb.post_id ';

        const result = await db.query(sql);

        console.log('result');

        return { success: true, message: 'result is getting success fully', result: result }
    } catch (err) {
        console.log('cannot fetch the data from the accomadation table' + err);
        return { success: false, message: 'cannot get the resul' + err.message }
    }
}

module.exports = {
    boarding_building ,renatalHouse,BoardingRoom
}