const express = require('express');
const router = express.Router();
const userController = require('./controllers/user.controller.js');
const songController = require('./controllers/song.controller.js');
const albumController = require('./controllers/album.controller.js');
const artistController = require('./controllers/artist.controller.js');

// Rutas para User
router.post('/users', userController.createUser);
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

// Rutas para Song
router.post('/songs', songController.createSong);
router.get('/songs', songController.getSongs);
router.get('/songs/:id', songController.getSongById);
router.put('/songs/:id', songController.updateSong);
router.delete('/songs/:id', songController.deleteSong);

// Rutas para Album
router.post('/albums', albumController.createAlbum);
router.get('/albums', albumController.getAlbums);
router.get('/albums/:id', albumController.getAlbumById);
router.put('/albums/:id', albumController.updateAlbum);
router.delete('/albums/:id', albumController.deleteAlbum);

// Rutas para Artist
router.post('/artists', artistController.createArtist);
router.get('/artists', artistController.getArtists);
router.get('/artists/:id', artistController.getArtistById);
router.put('/artists/:id', artistController.updateArtist);
router.delete('/artists/:id', artistController.deleteArtist);

module.exports = router;