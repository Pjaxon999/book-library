// Test external link
console.log("A Library Project? Here?! Are you mad?!");

// Grab elements for use in functions
let libraryTable = document.querySelector("table tbody");
const newBookButton = document.getElementById("new-book-btn");
const addBookDialog = document.getElementById("book-dialog");
const cancelButton = document.getElementById("cancel-btn");
const confirmButton = document.getElementById("confirm-btn");

// Open dialog window
newBookButton.addEventListener("click", () => {
    addBookDialog.showModal();
});

// Cancel button closes window without submitting
cancelButton.addEventListener("click", () => {
    addBookDialog.close();
});

/* Prevent default confirm behavior, capture form data, create a new book object, add the new
book to myLibrary, and close the dialog element */
confirmButton.addEventListener("click", function(event){
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").value;
    const score = document.getElementById("score").value;
    const newBook = new Book(title, author, pages, read, score);
    const newArrayLength = myLibrary.push(newBook);
    const newBookIndex = newArrayLength - 1;
    displayLibrary(newBookIndex);
    document.getElementById("book-form").reset();
    addBookDialog.close();
});


// Set up Array for storing book objects, constructor function for book objects
const myLibrary = [];

function Book(title, author, pages, read, score) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.score = score;
};

// Add a new row, populate cells with info from newly added book
function displayLibrary() {
    libraryTable.textContent = '';
    myLibrary.forEach((book, index) => {
            let newBookRow = libraryTable.insertRow();
            newBookRow.setAttribute('data-index', index)
            let titleCell = newBookRow.insertCell(0);
            let authorCell = newBookRow.insertCell(1);
            let pagesCell = newBookRow.insertCell(2);
            let readCell = newBookRow.insertCell(3);
            let scoreCell = newBookRow.insertCell(4);
            let deleteCell = newBookRow.insertCell(5);
            titleCell.textContent = book.title;
            authorCell.textContent = book.author;
            pagesCell.textContent = book.pages;
            readCell.textContent = book.read;
            scoreCell.textContent = book.score;
            const createDeleteButton = document.createElement("button");
            createDeleteButton.textContent = "X";
            createDeleteButton.setAttribute("class", "delete-button");
            deleteCell.appendChild(createDeleteButton);
    });
};