import './style.css';
import './images/tv-logo.jpg';
import show from './modules/show.js';
import baseURL from './modules/api.js';

const defaultURL = 'https://api.tvmaze.com/search/shows?q=girls';
let URL = '';
const category = document.querySelector('.input-category');

category.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && category.value) {
    e.preventDefault();
    const query = category.value;
    localStorage.setItem('query', query);
    console.log(`none${query}`);
    URL = `${baseURL.API}${query}`;
    show(URL);
    category.value = '';
  }
});

show(defaultURL);
localStorage.setItem('query', 'girls');