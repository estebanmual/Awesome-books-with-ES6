export default function displaySection() {
  const sections = {
    listSection: `
      <h1>Awesome Books</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      </section>`,

    addSection: `
      <section class="add-book-section">
              <h1>Add new book</h1>
              <input type="text" name="title" placeholder="Title" /> <br>
              <input type="text" name="author" placeholder="Author" /> <br>
              <button type="button">Add</button> <br>
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
  }

  defaultSection();

  document.addEventListener('click', (e) => {
    const sectionContainer = document.querySelector('.section-container');
    if (e.target.matches('.nav-link')) {
      switch (e.target.id) {
        case 'list-link':
          sectionContainer.innerHTML = sections.listSection;
          break;
        case 'add-link':
          sectionContainer.innerHTML = sections.addSection;
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