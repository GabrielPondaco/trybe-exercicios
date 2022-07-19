const { Router } = require('express');
const booksController = require('../controllers/booksController');

const booksRoute = Router();

booksRoute.get('/', booksController.list);

module.exports = booksRoute;