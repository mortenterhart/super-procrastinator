import {updateCheckboxState} from "./reducers/CheckboxStateReducer";
import rootReducer from "../APIs/redditAPI/reducers/rootReducer";
import ReduxThunk from "redux-thunk";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let combinedReducers = combineReducers({
    checkboxList: updateCheckboxState,
    redditAPI: rootReducer
});

// Create the single redux storage by combining the reducers from the checkboxes
// and from the Reddit API
let storage = createStore(
    combinedReducers,
    composeEnhancers(applyMiddleware(ReduxThunk))
);

storage.subscribe(() => {
    console.log("State in storage changed!");
    console.log(storage.getState());
});

export {storage};
