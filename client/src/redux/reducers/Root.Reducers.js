import { combineReducers } from "redux";
import user from "./User.Reducers";

const rootReducers = combineReducers({
  user,
});

export default rootReducers;
