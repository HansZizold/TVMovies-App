import './style.css';
import './images/tv-logo.jpg';
import show from './modules/show.js';
import baseURL from './modules/api.js';
import getCategory from './modules/getcategory.js';

// const defaultURL = 'https://api.tvmaze.com/search/shows?q=girls';
let URL = '';
const category = document.querySelector('.input-category');

category.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && category.value) {
    e.preventDefault();
    const query = category.value;
    URL = `${baseURL.API}${query}`;
    show(URL);
    category.value = '';
    localStorage.setItem('myquery', JSON.stringify(query));
  }
});

const loadData = () => {
  const showCategory = getCategory();
  URL = `${baseURL.API}${showCategory}`;
  show(URL);
};

loadData();