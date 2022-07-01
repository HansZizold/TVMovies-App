const retrieveLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/x1XZKjTp3JZIGC168Q0T/likes/');
  const likes = response.json();
  return likes;
};
export default retrieveLikes;
