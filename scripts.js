// Test external link
console.log("A Library Project? Here?! Are you mad?!");

// Get Table element and button element for use in functions
let libraryTable = document.querySelector("table");
const newBookButton = document.getElementById("book-btn");

// Set up Array for storing book objects, constructor function for book objects
const myLibrary = [];

function Book(title, author, pages, read, score) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.score = score;
};

function addBookToLibrary() {
  // take params, create a book then store it in the array
    let title = prompt("What is the name of the book?");
    let author = prompt("Who is the author of this book?");
    let pages = prompt("How many pages does this book have?");
    let read = prompt("Have you read this book?");
    let score = prompt("If you've read this book, please rate it out of 10. If you haven't read the book or don't feel like adding a score, type 'N/A'");
    let newBook = new Book(title, author, pages, read, score);
    myLibrary.push(newBook);
    displayLibrary(newBook);
};

function displayLibrary(Book) {
    let newBookRow = libraryTable.insertRow(1);
    let titleCell = newBookRow.insertCell(0);
    let authorCell = newBookRow.insertCell(1);
    let pagesCell = newBookRow.insertCell(2);
    let readCell = newBookRow.insertCell(3);
    let scoreCell = newBookRow.insertCell(4);
    titleCell.textContent = Book.title;
    authorCell.textContent = Book.author;
    pagesCell.textContent = Book.pages;
    readCell.textContent = Book.read;
    scoreCell.textContent = Book.score;
}