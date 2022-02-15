export default function displayNavbar() {
  const navbarHTML = `
<a href="#" class="nav-link" id="list-link">List</a>
<a href="#" class="nav-link" id="add-link">Add</a>
<a href="#" class="nav-link" id="contact-link">Contact</a>`;

  const navbarContainer = document.querySelector('.navbar-container');
  navbarContainer.innerHTML = navbarHTML;
}
