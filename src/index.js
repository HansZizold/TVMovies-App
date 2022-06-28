import './style.css';
import './images/tv-logo.jpg';
import show from './modules/show.js';

const baseURL = 'https://api.tvmaze.com/search/shows?q=';
let URL = '';
const category = document.querySelector('.input-category');

category.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && category.value) {
    e.preventDefault();
    const query = category.value;
    URL = baseURL + query;
    show(URL);
    category.value = '';
  }
});
