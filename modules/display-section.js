function Book(title, author) {
  this.title = title;
  this.author = author;
}

const getBooks = () => {
  let books;
  if (localStorage.getItem('books') === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('books'));
  }
  return books;
};

const addBook = (book) => {
  const books = getBooks();
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
};

const removeBook = (author) => {
  const books = getBooks();

  books.forEach((book, index) => {
    if (book.author === author) {
      books.splice(index, 1);
    }
  });

  localStorage.setItem('books', JSON.stringify(books));
};

class UI {
  static displayBooks() {
    const books = getBooks();
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td><button type="button" class="delete" id="delete">Remove</button></td>
          `;
    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}

export default function displaySection() {
  const sections = {
    listSection: `
    <section class="books-list-section" id="books-list"> 
      <h1>Awesome Books</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="book-list"></tbody>
      </table>
      </section>`,

    addSection: `
      <section class="add-book-section" id="add-books">
              <h1>Add new book</h1>
              <form id="book-form">
                <input type="text" name="title" placeholder="Title" id="title" /> <br>
                <input type="text" name="author" placeholder="Author" id="author"/> <br>
                <button type="submit" id="add-button">Add</button>
              </form>
      </section>`,

    contactSection: `
      <section class="contact-section">
              <h1>Contact Information</h1>
              <p>
                Do have any question or you just want to say "hello"
                You can Reach out to us!
              </p> 
              <br />
              <p>Our E-mail: books@awesome.com</p>
              <br />
              <p>Our Phone Number: 003311223344</p>
              <br />
              <p>Our Adress: John Doe street, 22, 883322 Vikings, Valhala</p>
            </section>`,
  };

  function defaultSection() {
    const sectionContainer = document.querySelector('.section-container');
    sectionContainer.innerHTML = sections.listSection;
    const books = getBooks();
    for (let i = 0; i < books.length; i += 1) {
      UI.addBookToList(books[i]);
    }
    document.querySelector('#book-list').addEventListener('click', (e) => {
      UI.deleteBook(e.target);
      removeBook(e.target.parentElement.previousElementSibling.textContent);
    });
  }

  defaultSection();

  document.addEventListener('click', (e) => {
    const sectionContainer = document.querySelector('.section-container');
    if (e.target.matches('.nav-link')) {
      switch (e.target.id) {
        case 'list-link':
          sectionContainer.innerHTML = sections.listSection;
          for (let i = 0; i < getBooks().length; i += 1) {
            UI.addBookToList(getBooks()[i]);
          }
          document.querySelector('#book-list').addEventListener('click', (e) => {
            UI.deleteBook(e.target);
            removeBook(e.target.parentElement.previousElementSibling.textContent);
          });
          break;
        case 'add-link':
          sectionContainer.innerHTML = sections.addSection;
          document.querySelector('#book-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const title = document.querySelector('#title').value;
            const author = document.querySelector('#author').value;
            const book = new Book(title, author);

            if (title === '' || author === '') {
              alert('Title and Author fields must be filled out');
              return false;
            }
            UI.clearFields();
            addBook(book);
            window.location.reload();
            return true;
          });
          break;
        case 'contact-link':
          sectionContainer.innerHTML = sections.contactSection;
          break;
        default:
          break;
      }
    }
  });
}