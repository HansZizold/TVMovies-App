import { retrieveShow } from './retrieveshow.js';
import addhtmlShows from './addhtmlshows.js';
import displayShowCounter from './displayshowcounter.js';

let imageArr = [];

const show = (URL) => {
  document.querySelectorAll('.show-item').forEach((e) => e.remove());
  const promiseShow = retrieveShow(URL);

  promiseShow.then((show) => {
    show.forEach((e) => {
      if (e.show.image !== null) {
        imageArr.push(e.show.image);
        addhtmlShows(e.show.id, e.show.name, e.show.image.medium, e.show.summary);
      }
    });
    displayShowCounter(imageArr.length);
    imageArr = [];
  });
};
export default show;
