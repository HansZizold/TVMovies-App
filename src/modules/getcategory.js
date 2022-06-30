const getCategory = () => {
  const category = JSON.parse(localStorage.getItem('myquery'));
  return category;
};

export default getCategory;