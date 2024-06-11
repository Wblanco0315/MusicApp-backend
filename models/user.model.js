const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
    name: String,
    songs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }]
});

const userSchema = new mongoose.Schema({
    user_name: String,
    email: String,
    password: String,
    photo: String,
    playlist: [playlistSchema]
});

const User = mongoose.model('User', userSchema);
module.exports = User;
