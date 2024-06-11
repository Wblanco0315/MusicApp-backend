const Song = require('../models/song.model');

exports.createSong = async (req, res) => {
    try {
        const song = new Song(req.body);
        await song.save();
        res.status(201).json(song);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getSongs = async (req, res) => {
    try {
        const songs = await Song.find();
        res.status(200).json(songs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getSongById = async (req, res) => {
    try {
        const song = await Song.findById(req.params.id).populate('Album');
        if (!song) return res.status(404).json({ message: 'Song not found' });
        res.status(200).json(song);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateSong = async (req, res) => {
    try {
        const song = await Song.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!song) return res.status(404).json({ message: 'Song not found' });
        res.status(200).json(song);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteSong = async (req, res) => {
    try {
        const song = await Song.findByIdAndDelete(req.params.id);
        if (!song) return res.status(404).json({ message: 'Song not found' });
        res.status(200).json({ message: 'Song deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
