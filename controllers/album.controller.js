const Album = require('../models/album.model');

exports.createAlbum = async (req, res) => {
    try {
        const album = new Album(req.body);
        await album.save();
        res.status(201).json(album);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getAlbums = async (req, res) => {
    try {
        const albums = await Album.find().populate('Artist');
        res.status(200).json(albums);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getAlbumById = async (req, res) => {
    try {
        const album = await Album.findById(req.params.id).populate('Artist');
        if (!album) return res.status(404).json({ message: 'Album not found' });
        res.status(200).json(album);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateAlbum = async (req, res) => {
    try {
        const album = await Album.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!album) return res.status(404).json({ message: 'Album not found' });
        res.status(200).json(album);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteAlbum = async (req, res) => {
    try {
        const album = await Album.findByIdAndDelete(req.params.id);
        if (!album) return res.status(404).json({ message: 'Album not found' });
        res.status(200).json({ message: 'Album deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
