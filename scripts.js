// Test external link
console.log("A Library Project? Here?! Are you mad?!");

// Grab elements for use in functions
let libraryTable = document.querySelector("table");
const newBookButton = document.getElementById("new-book-btn");
const addBookDialog = document.getElementById("book-dialog");
const cancelButton = document.getElementById("cancel-btn");
const confirmButton = document.getElementById("confirm-btn");
// Prevent default submit behavior


// Open dialog window
newBookButton.addEventListener("click", () => {
    addBookDialog.showModal();
});

// Cancel button closes window without submitting
cancelButton.addEventListener("click", () => {
    addBookDialog.close();
});




// Set up Array for storing book objects, constructor function for book objects
const myLibrary = [
    {
        title: "Ulysses",
        author: "James Joyce",
        pages: "732",
        read: "no",
        score:"n/a"
    },
    {
        title: "In Search of Lost Time",
        author: "Marcel Proust",
        pages: "4215",
        read: "yes",
        score: "10"
    }
];

function Book(title, author, pages, read, score) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.score = score;
};

// take params, create a book then store it in the array
function addBookToLibrary() {
    let newBook = new Book(title, author, pages, read, score);
    myLibrary.push(newBook);
    displayLibrary();
};

// Add a new row, populate cells with info from newly added book
function displayLibrary() {
    myLibrary.forEach((book) => {
            let newBookRow = libraryTable.insertRow(1);
            let titleCell = newBookRow.insertCell(0);
            let authorCell = newBookRow.insertCell(1);
            let pagesCell = newBookRow.insertCell(2);
            let readCell = newBookRow.insertCell(3);
            let scoreCell = newBookRow.insertCell(4);
            titleCell.textContent = book.title;
            authorCell.textContent = book.author;
            pagesCell.textContent = book.pages;
            readCell.textContent = book.read;
            scoreCell.textContent = book.score;
    });
};