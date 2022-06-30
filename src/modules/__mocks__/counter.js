class Counter {

  constructor(data){
    this.data = data;
  }

  showCount = (data) => {
   let size = data.length;
   if (data === undefined) data = 0;
   return data;
  }

  addCount = (currentMovie) => {
    if(currentMovie.length){
      return currentMovie.length
    }
    return null;
  }
}

module.exports = Counter;