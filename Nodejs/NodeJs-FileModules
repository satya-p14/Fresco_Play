// Book management nodejs and express
// update app.js file with below code


const express = require("express");
const fs = require('fs');
//setting up the express router
const app = express();
app.use(express.json());
//write the endpoint for the application here
// Define the path to the books data
const booksReadPath = 'get.json';
const booksWritePath = 'post.json';
// Utility function to read books from JSON file
function readBooksFromFile() {
  const booksData = fs.readFileSync(booksReadPath);
  return JSON.parse(booksData);
}

function writeBooksToFile(books) {
  fs.writeFileSync(booksWritePath, JSON.stringify(books, null, 2));
}

app.get('/view', async (req, res) => {
  const id = req.query.id;
  if (!id) {
    const books = readBooksFromFile();
    res.status(200).json(books);
  } else {
    let book = [];
    const books = readBooksFromFile();
    try {
      book.push(books.find(x => x.id == id));
      if (book == null) {
        return res.status(404).json({
          message: 'Cannot find'
        })
      }
    } catch (err) {
      return res.status(500).json({
        message: err.message
      });
    }
    res.status(200).send(book);
  }
});

// POST route to add a new book
app.post('/add', (req, res) => {
  const newBook = req.body;
  const books = readBooksFromFile();
  // Assign a new ID
  newBook.id = books.length ? books[books.length - 1].id + 1 : 1;
  // Add the new book to the array
  books.push(newBook);
  // Write the updated books back to the file
  writeBooksToFile(newBook);
  res.status(200).send(newBook);
});

module.exports = app;
