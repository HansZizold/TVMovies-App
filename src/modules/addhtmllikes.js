import retrieveLikes from './retrievelikes.js';
import BaseApi from './api.js';

const addhtmlLikes = (id) => {
  let mLikes = 0;
  const promiseLikes = retrieveLikes(BaseApi.Likes);
  promiseLikes.then((like) => {
    like.forEach((e) => {
      if (Number(e.item_id) === Number(id)) {
        mLikes = e.likes + 1;
        document.querySelectorAll('[data-id]').forEach((elem) => {
          if (Number(elem.getAttribute('data-id')) === Number(id) && elem.id === 'mylikes') {
            elem.innerHTML = `${mLikes} Likes`;
          }
        });
      }
      if (mLikes === 0) {
        document.querySelectorAll('[data-id]').forEach((elem) => {
          if (Number(elem.getAttribute('data-id')) === Number(id) && elem.id === 'mylikes') {
            elem.innerHTML = '1 Likes';
          }
        });
      }
    });
  });
};
export default addhtmlLikes;