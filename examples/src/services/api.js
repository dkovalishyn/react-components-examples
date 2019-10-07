export const URLS = {
  students: "students",
  posts: "posts"
};

const BASE_URL = "https://jsonplaceholder.typicode.com";

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  throw new Error(response.statusText);
};

export const getResource = url =>
  fetch(`${BASE_URL}/${url}`)
    .then(checkStatus)
    .then(response => response.json())
    .catch(error => {
      console.error(error);
      throw new Error(`Failed to fetch ${url}`);
    });
