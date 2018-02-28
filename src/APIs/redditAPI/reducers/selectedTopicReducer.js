import { SELECT_TOPIC } from "../actions/actionTypes";

const initialState = null;

const selectedTopicReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_TOPIC:
      return action.topic;
    default:
      return state;
  }
};

export default selectedTopicReducer;
