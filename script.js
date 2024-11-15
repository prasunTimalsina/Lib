"use strict";

//elements
const table = document.querySelector(".responsive-table");
const modal = document.querySelector(".modal");
const bookForm = document.querySelector(".book-form");
const bookElements = document.querySelectorAll(".table-row");
const titleEle = document.getElementById("title");
const authorEle = document.getElementById("author");
const pagesEle = document.getElementById("pages");
const readEle = document.getElementById("read");
const btnAddBook = document.querySelector(".button");
const clodeBtn = document.querySelector(".close");
const formAddBtn = document.querySelector(".formAddBtn");

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

// function to add
function addBookToLibrary(title, author, pages, read) {
  const book = new Books(title, author, pages, read);
  myLibrary.push(book);
}

//function to clear form field
const clearFields = function () {
  titleEle.value = pagesEle.value = authorEle.value = readEle.value = "";
};

//fn to close modal
const modalClose = function () {
  modal.style.display = "none";
};

//fn to show modal
const modalShow = function () {
  modal.style.display = "flex";
};

//function to display book
const display = function () {
  table.textContent = "";
  const html = `
      <li class="table-header">
          <div class="col col-1">Book Id</div>
          <div class="col col-2">Title</div>
          <div class="col col-3">Author</div>
          <div class="col col-4">Pages</div>
          <div class="col col-5">Delete</div>
          <div class="col col-6">Read</div>
          
        </li>
        `;
  table.insertAdjacentHTML("beforeend", html);
  myLibrary.forEach((book) => {
    const html = `
      <li class="table-row" data-id="${book.id}">
            <div class="col col-1 book" data-label="Book Id">${book.id}</div>
            <div class="col col-2 book" data-label="Title">${book.title}</div>
            <div class="col col-3 book" data-label="Author">${book.author}</div>
            <div class="col col-4 book" data-label="Pages">${book.pages}</div>
            <div class="col col-5 book" data-label="Read">${book.read}</div>
            <div class="delete-btn col-6">
            <svg class="delete-icon  delete-btn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path class="delete-btn" stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
        </div>
      </li>
    `;

    table.insertAdjacentHTML("beforeend", html);
    ///
  });
};

///function to delete book
const deleteBook = function (el) {
  const bookElement = el.parentElement.parentElement;
  if (el.classList.contains("delete-btn")) {
    console.log(myLibrary);
    console.log(bookElement.dataset.id);
    bookElement.remove();
    const index = myLibrary.findIndex(
      (book) => book.id === bookElement.dataset.id
    );
    if (index !== -1) {
      myLibrary.splice(index, 1); // Remove the object at the found index
    }
    console.log(myLibrary);
  }
};

/// Validating book form
function validate() {}

////Show form modal
btnAddBook.addEventListener("click", function () {
  modalShow();
});

///Add books
formAddBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const title = titleEle.value;
  const pages = pagesEle.value;
  const author = authorEle.value;
  const read = readEle.value;
  addBookToLibrary(title, pages, author, read);
  display();
  clearFields();
});

//delete Book
table.addEventListener("click", (e) => {
  console.log(e.target);
  deleteBook(e.target);
});

///Close modal
clodeBtn.addEventListener("click", function () {
  modalClose();
  clearFields();
});

const book1 = new Books("Hobbit", "J.R.R Tolkien", 295, false);

display();
