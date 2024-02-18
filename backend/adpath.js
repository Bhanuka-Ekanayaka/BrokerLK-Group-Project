const multer = require('multer');
const fs = require('fs');

//define a custom destination

const customDestination = async (req, file, cb) => {
    const post_ID = await req.query.post_ID;

    console.log('post id:'+post_ID);

    const destination = `uploads/${post_ID}/`;

    if (!fs.existsSync(destination)) {
        // If it doesn't exist, create it
        fs.mkdirSync(destination, { recursive: true });
    }

    cb(null, destination);
}

const upload = multer({
    storage: multer.diskStorage({
        destination: customDestination,
        filename: (req, file, cb) => {
            const filename = `${Date.now()}-${req.query.post_ID}-${file.originalname}`;
            cb(null, filename);
        }
    })
})


module.exports = upload;