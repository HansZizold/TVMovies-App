import './style.css';
import show from './modules/show.js';
import baseURL from './modules/api.js';
import getCategory from './modules/getcategory.js';
// import { postComment } from './modules/retrieveshow.js';
import AddComment from './modules/addComment.js';
import addhtmlLikes from './modules/addhtmllikes.js';

// const defaultURL = 'https://api.tvmaze.com/search/shows?q=girls';
let URL = '';
const category = document.querySelector('.input-category');

category.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && category.value) {
    e.preventDefault();
    const query = category.value;
    URL = `${baseURL.API}${query}`;
    show(URL, query);
    category.value = '';
    localStorage.setItem('myquery', JSON.stringify(query));
  }
});

const loadData = () => {
  const showCategory = getCategory();
  URL = `${baseURL.API}${showCategory}`;
  show(URL, showCategory);
};

loadData();

document.addEventListener('click', (e) => {
  // e.preventDefault;
  if (e.target.classList.contains('fa-heart')) {
    AddComment.postLikes(e.target.id);
    addhtmlLikes(e.target.id);
  }
});
