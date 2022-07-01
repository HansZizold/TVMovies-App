import { retrieveShow } from './retrieveshow.js';
import popupForm from './popup.js';
import retrieveLikes from './retrievelikes.js';
import BaseApi from './api.js';

const truncate = (str, max, suffix) => (str.length < max ? str : `${str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(' '))}${suffix}`);

const ebModal = document.getElementById('mainModalArea');

const displayModal = (j) => {
  document.querySelector('#popup-section').innerHTML = 'Loading,please wait..';
  const promiseShow = retrieveShow(`https://api.tvmaze.com/shows/${j}`);
  promiseShow.then((e) => {
    popupForm(e);
  });
  ebModal.style.display = 'block';
};

const addhtmlShows = (id, name, image, summary) => {
  let mLikes = 0;
  const promiseLikes = retrieveLikes(BaseApi.Likes);
  promiseLikes.then((like) => {
    like.forEach((e) => {
      if (Number(e.item_id) === id) {
        // console.log(e.likes + '-' + id);
        mLikes = e.likes;
        if (e.item_id != null) {
          document.querySelectorAll('[data-id]').forEach((elem) => {
            // console.log(elem.id + "===" + "mylikes");
            if (Number(elem.getAttribute('data-id')) === id && elem.id === 'mylikes') {
              elem.innerHTML = `${mLikes} Likes`;
            }
          });
        }
        // return true;
      }
    });
  });

  const tx = summary !== null ? truncate(summary, 100, '...') : '<p>no summary</p>';
  const showContainer = document.querySelector('.show-container');
  const showItem = document.createElement('div');
  showItem.classList.add('show-item');
  showItem.innerHTML += `
    <img src="${image}" alt="Shows">
    <div class='show-info'>
      <p>${name}</p>
      <i class="fas fa-heart" id="${id}"> <small data-id="${id}" id='mylikes'>0 Likes</small></i>
    </div>
    <div class="summary"><em>${tx}</em></div>
    <button type="button" class="show_modal"  data-id="${id}">Comment</button>
    <button type="button" class="loaded" reserve-id="${id}">Reservation</button>
    `;
  showContainer.appendChild(showItem);

  document.querySelectorAll('.show_modal').forEach((row) => row.addEventListener('click', () => displayModal(row.getAttribute('data-id'))));
};

// Get the <span> element that closes the modal
const ebSpan = document.getElementsByClassName('close_modal')[0];

// When the user clicks on <span> (x), close the modal
ebSpan.onclick = function () {
  ebModal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === ebModal) {
    ebModal.style.display = 'none';
  }
};

export default addhtmlShows;
