import * as api from "../utilities/api";

import {
  SELECT_TOPIC,
  REQUEST_POSTS,
  RECEIVE_POSTS,
  INVALIDATE_TOPIC
} from "./actionTypes";

export const selectTopic = topic => {
  return {
    type: SELECT_TOPIC,
    topic
  };
};

export const invalidateTopic = topic => {
  return {
    type: INVALIDATE_TOPIC,
    topic
  };
};

const requestPosts = topic => {
  return {
    type: REQUEST_POSTS,
    topic
  };
};

const receivePosts = (topic, postsData) => {
  return {
    type: RECEIVE_POSTS,
    posts: postsData.data.children,
    timestampFetched: Date.now(),
    topic
  };
};

const fetchPosts = topic => {
  return dispatch => {
    dispatch(requestPosts(topic));

    return api.fetchPosts(topic).then(
      postsData => {
        dispatch(receivePosts(topic, postsData));
      },
      err => {
        console.log(err);
      }
    );
  };
};

const shouldFetchPosts = (state, topic) => {
  const posts = state.postsByTopic[topic];
  if (!posts) {
    return true;
  } else if (posts.isFetching) {
    return false;
  } else {
    return posts.isInvalidated;
  }
};

export const fetchPostsIfNeeded = topic => {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), topic)) {
      return dispatch(fetchPosts(topic));
    }
  };
};
