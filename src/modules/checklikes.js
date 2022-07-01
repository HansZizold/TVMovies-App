const checkLikes = (id, mLikes) => {
  const likes = 0;
  console.log(mLikes);
  return mLikes.forEach((e) => {
    // console.log(e);
    if (Number(e.item_id) === id) {
      return e.likes;
    }
    return likes;
  });
  //  });
};
export default checkLikes;