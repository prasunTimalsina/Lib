"use strict";

//elements
const table = document.querySelector(".responsive-table");
const btnAddBook = document.querySelector(".button");
const addBookForm = document.querySelector(".modal");

/////
const myLibrary = [];

//Book Constructor
function Books(title, author, pages, read) {
  this.id = Math.floor(10000 + Math.random() * 90000).toString();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    console.log(
      `The ${title} by ${author}, ${pages}, ${
        this.read ? "is read" : "not read yet"
      }.`
    );
  };
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Books(title, author, pages, read);
  myLibrary.push(book);
}

//// Adding books
btnAddBook.addEventListener("click", function () {});

addBookToLibrary("Hobbit", "J.R.R Tolkien", 295, false);

addBookToLibrary("Hobbit", "J.R.R Tolkien", 295, false);
console.log(myLibrary);

const book1 = new Books("Hobbit", "J.R.R Tolkien", 295, false);

myLibrary.forEach((book) => {
  const html = `
    <li class="table-row">
          <div class="col col-1 book" data-label="Book Id">${book.id}</div>
          <div class="col col-2 book" data-label="Title">${book.title}</div>
          <div class="col col-3 book" data-label="Author">${book.author}</div>
          <div class="col col-4 book" data-label="Pages">${book.pages}</div>
          <div class="col col-5 book" data-label="Read">${book.read}</div>
    </li>
  `;
  console.log(html);
  table.insertAdjacentHTML("beforeend", html);
  ///
});
