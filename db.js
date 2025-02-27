const mongoose = require('mongoose'); //import mongoose library



mongoose.connect("mongodb+srv://rgwin1:sdev255m6tutorial@songdb.0d9sf.mongodb.net/?retryWrites=true&w=majority&appName=SongDB", {
    dbName: "Songs"
});

module.exports = mongoose