let library = [];

const book = function(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const addBookToLibrary = function() {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").value;
  const newBook = new book(title, author, pages, read);
  library.push(newBook);
  render();
  console.log(library)
}

const render = function () {
  const display = document.querySelector(".display");
  display.innerHTML = ""
  for (let i = 0; i < library.length; i++) {
    const bookTile = document.createElement("div");
    bookTile.className = "book-tile";
    display.appendChild(bookTile);

    const bookTitle = document.createElement("p");
    bookTitle.innerText = `Book Title: ${library[i].title}`;
    bookTile.appendChild(bookTitle);

    const bookAuthor = document.createElement("p");
    bookAuthor.innerText = `Book Author: ${library[i].author}`;
    bookTile.appendChild(bookAuthor);

    const bookPages = document.createElement("p");
    bookPages.innerText = `Book Pages: ${library[i].pages}`;
    bookTile.appendChild(bookPages);

    const bookRead = document.createElement("p");
    bookRead.innerText = `Book Read: ${library[i].read}`;
    bookTile.appendChild(bookRead);
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
  bookForm.reset()
  bookDialog.close()
})