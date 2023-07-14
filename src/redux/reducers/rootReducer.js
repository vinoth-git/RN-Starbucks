import { combineReducers } from "redux";
import chatReducer from "./chatReducer";

const rootReducer = combineReducers({
  chatReducer: chatReducer,
});

export default rootReducer;
