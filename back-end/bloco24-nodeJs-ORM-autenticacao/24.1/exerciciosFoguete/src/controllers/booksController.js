const booksService = require('../service/booksService');

/** @type {Record<string, import('express').RequestHandler>} */
const booksController = {
  async list(_req, res) {
    const books = await booksService.list();
    res.json(books);
  },

  // async add(req, res) {
  //   const data = await usersService.validateBodyAdd(req.body);
  //   const user = await usersService.add(data);
  //   res.status(201).json(user);
  // },
};

module.exports = booksController;