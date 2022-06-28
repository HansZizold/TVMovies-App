import './style.css';
import './images/tv-logo.jpg';
import  baseURL  from './module/api.js';

//const baseURL = 'https://api.tvmaze.com/search/shows?q=';
const query = 'star';
const URL = `${baseURL.API}` + query;

const retrieveShow = async (URL) => {
  const response = await fetch(URL);
  const show = response.json();
  return show;
};

const truncate = (str, max, suffix) => str.length < max ? str : `${str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(' '))}${suffix}`;



const addhtmlShows = (id, name, image, summary) => {
  const showContainer = document.querySelector('.show-container');
  const showItem = document.createElement('div');
  showItem.classList.add('show-item');
  showItem.innerHTML += `
    <img src="${image}" alt="Shows">
    <div class='show-info'>
      <p>${name}</p>
      <i class="fas fa-heart">  5 likes</i>
    </div>
    <div class="summary">${truncate(summary, 100, '...')}</div>
    <button type="button" class="show_modal"  data-id="${id}">Comment</button>
    <button type="button" class="loaded" reserve-id="${id}">Reservation</button>
    `;
  showContainer.appendChild(showItem);

 
  document.querySelectorAll('.show_modal').forEach((row) => row.addEventListener('click', () => displayModal(row.getAttribute('data-id'))));
};

var ebModal = document.getElementById('mainModalArea');
const displayModal = (j) => { 
  //alert("i am here")
  console.log(j)
  ebModal.style.display = "block";
}

// Get the <span> element that closes the modal
var ebSpan = document.getElementsByClassName("close_modal")[0];

// When the user clicks on <span> (x), close the modal
ebSpan.onclick = function() {
    ebModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == ebModal) {
        ebModal.style.display = "none";
    }
}


const show = (URL) => {
  const promiseShow = retrieveShow(URL);
  promiseShow.then((show) => {
    show.forEach((e) => {
      addhtmlShows(e.show.id, e.show.name, e.show.image.medium, e.show.summary);
    });
  });
};


show(URL);
