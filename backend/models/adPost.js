const db = require('../db');

const createAd = (adData, callback) => {
    const { images, title, category, price, location, contact, description } = adData;
    const sql = "INSERT INTO ads (images, title, category, price, location, contact, description) VALUES (?, ?, ?, ?, ?, ?, ?)";

    db.query(sql, [images.join(","), title, category, price, location, contact, description], (err, result) => {
        if (err) {
            console.log("MySQL insertion error: " + err.message);
            return callback(err, null);
        } else {
            return callback(null, result);
        }
    });
};

module.exports = {
    createAd,
};