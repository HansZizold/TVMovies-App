import './style.css';
import './images/tv-logo.jpg';
import show from './modules/show.js';
import baseURL from './modules/api.js';
import getCategory from './modules/getcategory.js';
// import { postComment } from './modules/retrieveshow.js';
import AddComment from './modules/addComment.js';
import addhtmlShows from './modules/addhtmlshows.js';


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

document.addEventListener('click', (e) => {
  e.preventDefault;
  if (e.target.classList.contains('fas')) {
    AddComment.postLikes(e.target.id);
  }
})

