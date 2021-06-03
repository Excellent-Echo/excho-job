import { combineReducers } from "redux";

import userRegisterReducer from "./user/register/userRegisterReducer";
import userLoginReducer from "./user/login/userRegisterReducer";
import jobReducer from "./jobs/jobReducer";

const rootReducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  jobReducer,
});

export default rootReducer;
