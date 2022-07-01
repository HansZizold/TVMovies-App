import AddComment from './addComment.js';
import { retrieveShow } from './retrieveshow.js';
import BaseApi from './api.js';

const popupForm = (e) => {
  const promiseShow = retrieveShow(`${BaseApi.Cmt}${e.id}`);
  let commentLength = 0;

  let content = '';
  promiseShow.then((show) => {
    commentLength = show.length;

    if (show.length > 0) {
      content = `<h5>Comment (${commentLength})</h5> <hr/>`;
      show.forEach((e) => {
        content += `<p><b><small> ${e.creation_date}: </small></b>   ${e.comment} <small>by: ${e.username}</small></p>`;
        return true;
      });
    }
    document.getElementById('listComment').innerHTML = content;
  });

  document.querySelector('#popup-section').innerHTML = `<div class="pop-container">
    <h2>${e.name} </h2><hr/>
    <div class="popupflex">
    <img src="${e.image.medium}" />
    <ul>
        <li><b>status:</b> ${e.status}</li>
        <li><b>date:</b> ${e.premiered}</li>
        <li><b>Time:</b> ${e.schedule.time} - ${e.schedule.days}</li>
        <li><b>Weight:</b> ${e.weight}</li>
        <li><b>Genre:</b> ${e.genres}</li>
    </ul>
  
    </div>
    <form class="commentForm" id="commentForm">
    <div id="successMsg"></div>
    <label for="name">Your Name</label>
    <input type="text" id="username" name="username" maxlength="30" placeholder="Enter your name" required />
     
    <label for="name">Your Insight</label>
    <textarea row="40" cols="10" name="sendcomment" id="sendcomment" required></textarea> 
    <input type="hidden" name="item_id" id="item_id" value="${e.id}" />
    <input type="hidden" name="type" id="type" value="comments" />
    <input type="submit" value="SubmitForm"/>
    </form>
    </div>
   
    <div id="listComment"></div>
    `;

  // Posting the form element
  const cForm = document.getElementById('commentForm');
  const itemID = document.getElementById('item_id');
  const commentPost = document.getElementById('sendcomment');
  const urlComment = document.getElementById('type');
  const username = document.getElementById('username');
  const msg = document.getElementById('successMsg');

  cForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const sendData = await AddComment.pushCommentToApi(itemID.value, username.value, commentPost.value, urlComment.value);
    if (sendData === 'Created') {
      msg.textContent = 'Comment Sucessfully Added';
      content = '';
      // Consult the show API again and update the html content
      const promiseShowUpdated = retrieveShow(`${BaseApi.Cmt}${itemID.value}`);
      promiseShowUpdated.then((show) => {
        commentLength = show.length;
        content = `<h5>Comment (${commentLength})</h5> <hr/>`;
        show.forEach((e) => {
          content += `<p><b><small> ${e.creation_date}: </small></b>   ${e.comment} <small>by: ${e.username}</small></p>`;
        });
        document.getElementById('listComment').innerHTML = content;
      });
    }
  });
};

export default popupForm;
