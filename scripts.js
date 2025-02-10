// Test external link
console.log("A Library Project? Here?! Are you mad?!");

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`
    }
};

function addBookToLibrary() {
  // take params, create a book then store it in the array
    let title = prompt("What is the name of the book?");
    let author = prompt("Who is the author of this book?");
    let pages = prompt("How many pages does this book have?");
    let read = prompt("Is this a book you have read or not read?");
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    console.log(myLibrary);
};

