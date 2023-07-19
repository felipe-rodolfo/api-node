import express from 'express';
import AuthorController from '../controllers/authorsController.js';

const router = express.Router();

router
    .get('/authors', AuthorController.listAuthors)
    .post('/author', AuthorController.registerAuthor)

export default router;