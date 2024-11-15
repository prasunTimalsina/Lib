"use strict";

//elements
const table = document.querySelector(".responsive-table");
const modal = document.querySelector(".modal");
const bookForm = document.querySelector(".book-form");
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
          <div class="col col-5">Read</div>
        </li>`;
  table.insertAdjacentHTML("beforeend", html);
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

///Close modal
clodeBtn.addEventListener("click", function () {
  modalClose();
  clearFields();
});

const book1 = new Books("Hobbit", "J.R.R Tolkien", 295, false);

display();
