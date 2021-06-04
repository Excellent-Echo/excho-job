import { combineReducers } from "redux";

import userRegisterReducer from "./user/register/userRegisterReducer";
import userLoginReducer from "./user/login/userLoginReducer";
import jobReducer from "./jobs/jobReducer";
import formReducer from "./formJobs/formJobsReducer";

const rootReducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  jobReducer,
  formJob: formReducer,
});

export default rootReducer;
