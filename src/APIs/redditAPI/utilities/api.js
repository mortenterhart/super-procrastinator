import axios from "axios";

export const fetchPosts = (subreddit = `reactjs`) => {
  const api = `https://www.reddit.com/r/${subreddit}.json`;

  return axios
    .get(api)
    .then(response => response.data)
    .catch(err => console.log(err));
};
