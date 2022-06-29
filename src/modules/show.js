import { retrieveShow } from './retrieveshow.js';
import addhtmlShows from './addhtmlshows.js';
import retrieveLikes from './retrievelikes.js';
import BaseApi from './api.js';
import checkLikes from './checklikes.js';

const show = (URL) => {
  document.querySelectorAll('.show-item').forEach((e) => e.remove());
  const promiseShow = retrieveShow(URL);

  const mLikes = [];
  const promiseLikes = retrieveLikes(BaseApi.Likes);
  promiseLikes.then((like) =>  { 
    mLikes.push(like)
  });

  promiseShow.then((show) => {
    show.forEach((e) => {
      let likes = checkLikes(e.show.id, mLikes);
      //console.log(likes)
      addhtmlShows(e.show.id, e.show.name, e.show.image.medium, e.show.summary, likes);
    });
  });
};
export default show;
