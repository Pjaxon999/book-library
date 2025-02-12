const myLibrary = [];
const libraryTable = document.querySelector("table tbody");
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
    const bookForm = document.getElementById("book-form");
    const readInput = document.getElementById("read");
    const readValue = readInput.value.trim().toLowerCase();
    if (readValue !== "yes" && readValue !== "no") {
        readInput.setCustomValidity("Please enter 'yes' or 'no'.");
    } else {
        readInput.setCustomValidity("");
    }
    if (bookForm.checkValidity()) {
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
    } else {
        bookForm.reportValidity();
    }
});

function Book(title, author, pages, read, score) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.score = score;
    this.readStatus = function () {
        if (this.read.trim().toLowerCase() === "yes"){
            this.read = "No";
        } else {
            this.read = "Yes";
        }
    };
};

function displayLibrary() {
    libraryTable.textContent = '';
    myLibrary.forEach((book, index) => {
            const newBookRow = libraryTable.insertRow();
            newBookRow.setAttribute('data-index', index)
            const titleCell = newBookRow.insertCell(0);
            const authorCell = newBookRow.insertCell(1);
            const pagesCell = newBookRow.insertCell(2);
            const readCell = newBookRow.insertCell(3);
            const scoreCell = newBookRow.insertCell(4);
            const deleteCell = newBookRow.insertCell(5);
            const readStatusCell = newBookRow.insertCell(6);
            titleCell.textContent = book.title;
            authorCell.textContent = book.author;
            pagesCell.textContent = book.pages;
            readCell.textContent = book.read;
            scoreCell.textContent = book.score;
            const createDeleteButton = document.createElement("button");
            createDeleteButton.textContent = "X";
            createDeleteButton.setAttribute("class", "delete-button")
            createDeleteButton.addEventListener("click", removeBook);
            deleteCell.appendChild(createDeleteButton);
            const createReadButton = document.createElement("button");
            createReadButton.textContent = "Change Read Status";
            createReadButton.setAttribute("id", "read-btn");
            createReadButton.addEventListener("click", readStatusUpdate);
            readStatusCell.appendChild(createReadButton);
    });
};

function removeBook(event) {
    const target = event.target;
    const parent = target.parentElement;
    const row = parent.parentElement;
    const index = Number(row.getAttribute("data-index"));
    myLibrary.splice(index, 1);
    row.remove();
}

function readStatusUpdate(event) {
    const target = event.target;
    const parent = target.parentElement;
    const row = parent.parentElement;
    const index = Number(row.getAttribute("data-index"))
    const book = myLibrary[index];
    book.readStatus();
    const readCell = row.cells[3];
    readCell.textContent = book.read;
}