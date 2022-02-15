import displaySection from './modules/display-section.js';
import displayNavbar from './modules/navbar.js';
import { DateTime } from './node_modules/luxon/build/es6/luxon.js';

displayNavbar();
displaySection();

setInterval(() => { document.querySelector('.time').innerHTML = DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); }, 10);