import './style.css';
import './images/tv-logo.jpg';

const baseURL = 'https://api.tvmaze.com/search/shows?q=';
const query = 'star';
const URL = baseURL + query;

const retrieveShow = async (URL) => {
  const response = await fetch(URL);
  const show = response.json();
  return show;
};

const addhtmlShows = (name, image) => {
  const showContainer = document.querySelector('.show-container');
  const showItem = document.createElement('div');
  showItem.classList.add('show-item');
  showItem.innerHTML += `
    <img src="${image}" alt="Shows">
    <div class='show-info'>
      <p>${name}</p>
      <i class="fas fa-heart">  5 likes</i>
    </div>
    <button type="button">Comments</button>
    `;
  showContainer.appendChild(showItem);
};

const show = (URL) => {
  const promiseShow = retrieveShow(URL);
  promiseShow.then((show) => {
    show.forEach((e) => {
      addhtmlShows(e.show.name, e.show.image.medium);
    });
  });
};
show(URL);
