import { combineReducers } from "redux";
import selectedTopicReducer from "./selectedTopicReducer";
import postsByTopicReducer from "./postsByTopicReducer";

export default combineReducers({
  selectedTopic: selectedTopicReducer,
  postsByTopic: postsByTopicReducer
});
