import {
  GET_ALL_JOB_REQUEST,
  GET_ALL_JOB_SUCCESS,
  GET_ALL_JOB_FAILED,
  GET_JOB_DETAILS_REQUEST,
  GET_JOB_DETAILS_SUCCESS,
  GET_JOB_DETAILS_FAILED,
} from "./jobAction";

const intialState = {
  listJob: [],
  jobDetail: {},
  loading: false,
  error: null,
};

export default function jobReducer(state = intialState, action) {
  switch (action.type) {
    case GET_ALL_JOB_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_JOB_SUCCESS:
      return {
        ...state,
        loading: false,
        listJob: action.payload,
      };
    case GET_ALL_JOB_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_JOB_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_JOB_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        jobDetail: action.payload,
      };
    case GET_JOB_DETAILS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
