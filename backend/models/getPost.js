const db = require('../db');

const getBoardingRoomPost = async () => {

    try {
        const sql = 'SELECT * ' +
            'FROM accommodationtb ' +
            'INNER JOIN price_detailstb ON accommodationtb.post_id = price_detailstb.post_id '+
            'INNER JOIN boarding_roomstb ON accommodationtb.post_id = boarding_roomstb.post_id '+
            'INNER JOIN boarding_room_imgtb ON accommodationtb.post_id = boarding_room_imgtb.room_id '+
            'ORDER BY accommodationtb.post_id DESC ' +
            'LIMIT 20';

        const result = await db.query(sql);

        return { success: true, message: 'result is getting success fully', result: result }
    } catch (err) {
        console.log('cannot fetch the data from the accomadation table' + err);
        return { success: false, message: 'cannot get the resul' + err.message }
    }
}

module.exports = {
    getBoardingRoomPost
}