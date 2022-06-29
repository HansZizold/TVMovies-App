import AddComment from './addComment.js';
import { retrieveShow } from './retrieveshow.js';


const retrieveComment = () => {
    const promiseShow = retrieveShow(URL);
    promiseShow.then((show) => {
        show.forEach((e) => { 
     document.getElementById('listComment').innerHTML = `
        <div>
            <h3>Comment(0)</h3>
            <ul>
                <li>${e.creation_date}: ${e.comment} <small>by: ${e.username}</small></li>
            </ul>
        </div>
            `;
        });
    });
}


const popupForm = (e) => { 
    document.querySelector('#popup-section').innerHTML = 
    `<div class="pop-container">
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
  
 
    <div id="listComment">
        <h3>Comment(0)</h3>
    <ul>
        <li>creation_date: close it now <small>by: username</small></li>
        <li>creation_date: work with us<small>by: victor</small></li>
    </ul>
    </div>

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

    //Posting the form element
    const cForm =  document.getElementById('commentForm');
    const itemID = document.getElementById('item_id');
    const commentPost = document.getElementById('sendcomment');
    const urlComment = document.getElementById('type');
    const username = document.getElementById('username');
    const msg = document.getElementById('successMsg');

    cForm.addEventListener('submit',  async (e) => {

        e.preventDefault();
        const sendData = await AddComment.pushCommentToApi(itemID.value, username.value, commentPost.value, urlComment.value);
        console.log(sendData);
        if(sendData == 'Created'){
            msg.textContent = "Comment Sucessfully Added";
            //document.getElementById('mainModalArea').style.display = 'none';
        }

    })
}


export default popupForm;