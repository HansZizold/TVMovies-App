const retrieveShow = async (URL) => {
  const response = await fetch(URL);
  const show = response.json();
  return show;
};

const postComment = async (url, body) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  // const result = await res.json();
  const result = await res.text();
  return result;
};

export { retrieveShow, postComment };
