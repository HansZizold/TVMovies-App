import { postComment } from './retrieveshow.js';
import baseURL from './api.js';

class AddComment {
    static pushCommentToApi = async (itemID, username, commentPost, urlComment) => {
      const mbody = {
        item_id: itemID,
        username,
        comment: commentPost,
      };

      const postApiCall = await postComment(`${baseURL.Inv + urlComment}`, mbody);
      return postApiCall;
    }

    static postLikes = async (itemID) => {
      const mbody = {
        item_id: itemID
      };

      const postLike = await postComment('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/x1XZKjTp3JZIGC168Q0T/likes/', mbody);
      return postLike;
    }

}
export default AddComment;