const multer = require('multer');

const storage = multer.diskStorage({
    destination(req, file, callback) {
        callback(null, 'public/books');
    },
    filename(req, file, callback) {
        callback(null, `${Date.now()}-${file.originalname}`);
    }
});

module.exports = multer({storage});