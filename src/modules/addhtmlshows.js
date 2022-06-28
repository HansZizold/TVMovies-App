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
export default addhtmlShows;
