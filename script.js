const addBook = document.querySelector(".addBook");
const grid = document.querySelector(".grid");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const form = document.querySelector("#addBook");

myLibrary = [];

function pushBookToLibrary(book) {
  if (myLibrary.some((e) => e.title === book.title)) {
    alert("This Book Title already exists in Library");
    return;
  } else {
    myLibrary.push(book);
    updateLibrary();
  }
}

function updateLibrary() {
  grid.replaceChildren();
  n = 0;
  myLibrary.forEach((book) => {
    createBookCard(book);
    n += 1;
  });
}

function createBookCard(book) {
  const bookCard = document.createElement("div");
  const title = document.createElement("p");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  const isRead = document.createElement("button");
  const deleteBook = document.createElement("button");
  const button = document.createElement("div");

  title.textContent = `"${book.title}"`;
  author.textContent = `- ${book.author}`;
  pages.textContent = `Pages : ${book.pages}`;
  deleteBook.textContent = "Delete";

  bookCard.classList.add("book-card");
  bookCard.dataset.index = `${n}`;

  button.classList.add("btn-grp");
  button.appendChild(isRead);
  button.appendChild(deleteBook);

  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(button);

  grid.appendChild(bookCard);

  if (book.isRead) {
    isRead.classList.add("active");
    isRead.textContent = "READ";
  } else {
    isRead.textContent = "Not READ";
  }

  isRead.onclick = () => {
    if (isRead.classList.contains("active")) {
      isRead.classList.remove("active");
      isRead.textContent = "Not READ";
    } else {
      isRead.classList.add("active");
      isRead.textContent = "READ";
    }
  };

  deleteBook.onclick = () => {
    console.log(bookCard.dataset.index);
    myLibrary.splice([`${bookCard.dataset.index}`], 1);
    updateLibrary();
  };
}

function book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

activateForm = () => {
  modal.classList.add("active");
  overlay.classList.add("active");
};

deActivateForm = () => {
  form.reset();
  modal.classList.remove("active");
  overlay.classList.remove("active");
};

addBook.onclick = activateForm;
overlay.onclick = deActivateForm;

function getFormInput() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const isRead = document.getElementById("checkmark").checked;
  return new book(title, author, pages, isRead);
}

form.onsubmit = function (e) {
  e.preventDefault();
  const newBook = getFormInput();
  pushBookToLibrary(newBook);
  deActivateForm();
};
