let library = [];

const book = function(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

book.prototype.toggleRead = function() {
  this.read = !this.read;
}

const removeBook = function (index) {
  library.splice(index, 1);
}

const addBookToLibrary = function() {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").checked;
  const newBook = new book(title, author, pages, read);
  library.push(newBook);
  render();
  console.log(library)
}

const render = function() {
  const display = document.querySelector(".display");
  display.innerHTML = ""
  for (let i = 0; i < library.length; i++) {
    const addedBook = library[i];
    const bookTile = document.createElement("div");
    bookTile.className = "book-tile";
    display.appendChild(bookTile);
    
    const bookTitle = document.createElement("p");
    bookTitle.innerText = `Book Title: ${addedBook.title}`;
    bookTile.appendChild(bookTitle);

    const bookAuthor = document.createElement("p");
    bookAuthor.innerText = `Book Author: ${addedBook.author}`;
    bookTile.appendChild(bookAuthor);

    const bookPages = document.createElement("p");
    bookPages.innerText = `Book Pages: ${addedBook.pages}`;
    bookTile.appendChild(bookPages);

    const bookRead = document.createElement("p");
    bookRead.innerText = `Book Read: ${addedBook.read ? "Yes" : "No"}`
    bookTile.appendChild(bookRead)

    const toggleReadCheckbox = document.createElement("input");
    toggleReadCheckbox.type = "checkbox";
    toggleReadCheckbox.checked = addedBook.read;
    bookTile.appendChild(toggleReadCheckbox);

    toggleReadCheckbox.addEventListener("change", function() {
      addedBook.toggleRead();
      render();
    })

    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove Book"
    bookTile.appendChild(removeButton);

    removeButton.addEventListener("click", function() {
      removeBook(i);
      render();
    })
  }
}

//use dialog
const bookDialog = document.querySelector(".book-dialog");
const showModal = function() {
 bookDialog.showModal()
}

const bookForm = document.querySelector(".book-form");
bookForm.addEventListener("submit", function(e) {
  e.preventDefault();
  addBookToLibrary();
  bookForm.reset();
  bookDialog.close();
})