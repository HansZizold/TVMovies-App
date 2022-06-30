import './style.css';
import './images/tv-logo.jpg';
import show from './modules/show.js';
import baseURL from './modules/api.js';
import getCategory from './modules/getcategory.js';
// import { postComment } from './modules/retrieveshow.js';
import AddComment from './modules/addComment.js';

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

const updateLikes = async (id) => {
  console.log(typeof(id));
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/x1XZKjTp3JZIGC168Q0T/likes/', {
    method: 'POST',
    body: JSON.stringify({
      "item_id": Number(id),
    }),
  });
  const likes = response.json();
  console.log(likes);
};


document.addEventListener('click', (e) => {
  e.preventDefault;
  if (e.target.classList.contains('fas')) {
    AddComment.postLikes(e.target.id);
    //updateLikes(e.target.id);
  }
})

