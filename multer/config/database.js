const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/multer');
const db = mongoose.connection;

db.once('open', () => {
    console.log('Connected to Database');
});

module.exports = db;

