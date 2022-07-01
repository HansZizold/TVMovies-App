const retrieveShow = async (URL) => {
  const response = await fetch(URL);
  const show = response.json();
  return show;
};
export default retrieveShow;
