const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    title: String,
    album_cover: String,
    Artist: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist', required: true }
});

const Album = mongoose.model('Album', albumSchema);
module.exports = Album;
