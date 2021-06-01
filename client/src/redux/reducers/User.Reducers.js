import {
  LOGIN,
  USERREGISTER,
  HIREREGISTER,
  LOGOUT,
} from "../action/User.Actions";

const token = localStorage.getItem("token");

const initialState = token
  ? {
      isLogged: true,
      data: [],
      error: null,
    }
  : {
      isLogged: false,
      data: [],
      error: null,
    };

export default function user(state = initialState, action) {
  switch (action.type) {
    case USERREGISTER:
      return {
        registerData: action.payload,
      };
    case HIREREGISTER:
      return {
        registerData: action.payload,
      };
    case LOGIN:
      return {
        ...state,
        isLogged: true,
      };
    case LOGOUT:
      return {
        ...state,
        isLogged: false,
      };
    default:
      return state;
  }
}
