const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    Image: String
});

const Artist = mongoose.model('Artist', artistSchema);
module.exports = Artist;
