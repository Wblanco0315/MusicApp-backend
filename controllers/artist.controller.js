const Artist = require('../models/artist.model');

exports.createArtist = async (req, res) => {
    try {
        const artist = new Artist(req.body);
        await artist.save();
        res.status(201).json(artist);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getArtists = async (req, res) => {
    try {
        const artists = await Artist.find();
        res.status(200).json(artists);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getArtistById = async (req, res) => {
    try {
        const artist = await Artist.findById(req.params.id);
        if (!artist) return res.status(404).json({ message: 'Artist not found' });
        res.status(200).json(artist);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updateArtist = async (req, res) => {
    try {
        const artist = await Artist.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!artist) return res.status(404).json({ message: 'Artist not found' });
        res.status(200).json(artist);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteArtist = async (req, res) => {
    try {
        const artist = await Artist.findByIdAndDelete(req.params.id);
        if (!artist) return res.status(404).json({ message: 'Artist not found' });
        res.status(200).json({ message: 'Artist deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
