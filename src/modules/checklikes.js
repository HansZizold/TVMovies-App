const checkLikes = (id, promiseLikes) => {
    //console.log("inside likes ")
   console.log(promiseLikes)
   // console.log(id, promiseLikes)
    let likes = 0;
    //promiseLikes.then((like) => {
        //console.log(like)
        promiseLikes.forEach((e) => {
        console.log(e)
        if(Number(e.item_id) === id) {
         //console.log(e.likes, '-', id)
         return e.likes;
        }
       // return e.likes;
      });
     // return likes
   // });

   // return likes;
  };
  export default checkLikes;