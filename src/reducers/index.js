import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { postsReducer } from "./postsReducer";

// CombineReducers - library from redux
// Used to connect multiple reducers into single reducer

export default combineReducers({
  count: counterReducer,
  post: postsReducer,
});

// Provided KEY will be used to access individual reducer
