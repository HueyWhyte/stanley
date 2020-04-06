import { combineReducers } from "redux";
import projectReducer from "./projectReducer";

const rootReducer = combineReducers({
  projects: projectReducer,
});

export default rootReducer;
