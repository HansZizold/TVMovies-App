import AddComment from './addComment.js';
// import { retrieveShow } from './retrieveshow.js';
// import BaseApi from './api.js';

const popupForm = (e) => {
  // const promiseShow = retrieveShow(`${BaseApi.Cmt}` + e.id);
  // console.log(`${BaseApi.Cmt}` + e.id)
  // let content = '';
  // promiseShow.then((show) => {

  //     document.getElementById('listComment').innerHTML = `
  //     <div>
  //         <h3>Comment(0)</h3>
  //         <ul>
  //             <li>${show.creation_date}: ${show.comment} <small>by: ${show.username}</small></li>
  //         </ul>
  //     </div>
  //         `;
  // })

  document.querySelector('#popup-section').innerHTML = `<div class="pop-container">
    <h2>${e.name} </h2> <span>(5 likes)</span><hr/>
    <div class="popupflex">
    <img src="${e.image.medium}" />
    <ul>
        <li><b>status:</b> ${e.status}</li>
        <li><b>date:</b> ${e.premiered}</li>
        <li><b>Time:</b> ${e.schedule.time} - ${e.schedule.days}</li>
        <li><b>Weight:</b> ${e.weight}</li>
        <li><b>Genre:</b> ${e.genres}</li>
    </ul>
  
    <div id="listComment"></div>

    </div>
    <form class="commentForm" id="commentForm">
    <div id="successMsg"></div>
    <label for="name">Your Name</label>
    <input type="text" id="username" name="username" maxlength="30" placeholder="Enter your name" required />
     
    <label for="name">Comments</label>
    <textarea row="40" cols="10" name="sendcomment" id="sendcomment" required></textarea> 
    <input type="hidden" name="item_id" id="item_id" value="${e.id}" />
    <input type="hidden" name="type" id="type" value="comments" />
    <input type="submit" value="SubmitForm"/>
    </form>
    </div>`;

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
    console.log(sendData);
    if (sendData === 'Created') {
      msg.textContent = 'Comment Sucessfully Added';
      // document.getElementById('mainModalArea').style.display = 'none';
    }
  });
};

export default popupForm;