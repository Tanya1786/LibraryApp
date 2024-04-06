const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect('mongodb+srv://group13:group13@cluster0.msncczd.mongodb.net/books?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB Connection Error:', err));

//routes
const booksRouter = require('./routes/books');
app.use('/books', booksRouter);

//start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
