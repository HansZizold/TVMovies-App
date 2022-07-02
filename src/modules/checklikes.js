const checkLikes = (id, mLikes) => {
  const likes = 0;
  return mLikes.forEach((e) => {
    if (Number(e.item_id) === id) {
      return e.likes;
    }
    return likes;
  });
};
export default checkLikes;
