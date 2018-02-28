import {
  RECEIVE_POSTS,
  REQUEST_POSTS,
  INVALIDATE_TOPIC
} from "../actions/actionTypes";

const initialState = {};

const postsByTopicReducer = (state = initialState, action) => {
  switch (action.type) {
    case INVALIDATE_TOPIC:
    case REQUEST_POSTS:
    case RECEIVE_POSTS:
      return {
        ...state,
        [action.topic]: postReducer(state[action.topic], action)
      };

    default:
      return state;
  }
};

const initialPostState = {
  timestampFetched: null,
  isFetching: false,
  posts: [],
  isInvalidated: false
};

const postReducer = (state = initialPostState, action) => {
  switch (action.type) {
    case INVALIDATE_TOPIC:
      return {
        ...state,
        isInvalidated: true
      };
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
        isInvalidated: false
      };
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        isInvalidated: false,
        posts: action.posts,
        timestampFetched: action.timestampFetched
      };
    default:
      return state;
  }
};

export default postsByTopicReducer;
