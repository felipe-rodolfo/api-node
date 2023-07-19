import express from 'express';
import ArtFramesController from '../controllers/artFramesController.js';
const router = express.Router();

router
    .get('/arts', ArtFramesController.listArtFrames)
    .post('/arts', ArtFramesController.registerArt)
    .put('/arts/:id', ArtFramesController.updateArt)
    .delete('/arts/:id', ArtFramesController.deleteArt)

export default router;