const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    name: String,
    number: Number,
    Album: { type: mongoose.Schema.Types.ObjectId, ref: 'Album', required: true }
});

const Song = mongoose.model('Song', songSchema);
module.exports = Song;
