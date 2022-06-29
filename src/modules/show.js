import { retrieveShow } from './retrieveshow.js';
import addhtmlShows from './addhtmlshows.js';

const show = (URL) => {
  document.querySelectorAll('.show-item').forEach((e) => e.remove());
  const promiseShow = retrieveShow(URL);
  promiseShow.then((show) => {
    show.forEach((e) => {
      addhtmlShows(e.show.id, e.show.name, e.show.image.medium, e.show.summary, e.show.url);
    });
  });
};
export default show;
