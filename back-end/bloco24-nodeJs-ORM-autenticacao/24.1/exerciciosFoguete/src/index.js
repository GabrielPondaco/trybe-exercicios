const express = require('express');
const booksRoute = require('./routes/booksRoute');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use('/books', booksRoute);

// const errorHandlerMiddleware = require('./middlewares/errorHandlerMiddleware');
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
