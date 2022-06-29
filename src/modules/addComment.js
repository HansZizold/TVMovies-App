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
}

export default AddComment;