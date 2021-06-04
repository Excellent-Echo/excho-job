import axios from "axios";
export const GET_ALL_JOB_REQUEST = "GET_ALL_JOB_REQUEST";
export const GET_ALL_JOB_SUCCESS = "GET_ALL_JOB_SUCCESS";
export const GET_ALL_JOB_FAILED = "GET_ALL_JOB_FAILED";
export const GET_JOB_DETAILS_REQUEST = "GET_JOB_DETAILS_REQUEST";
export const GET_JOB_DETAILS_SUCCESS = "GET_JOB_DETAILS_SUCCESS";
export const GET_JOB_DETAILS_FAILED = "GET_JOB_DETAILS_FAILED";

export const getJobAction = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_JOB_REQUEST,
      });

      const response = await axios.get("https://excho-job.herokuapp.com/jobs");

      console.log("response action", response);
      dispatch({
        type: GET_ALL_JOB_SUCCESS,
        payload: response.data.data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_JOB_FAILED,
        payload: error,
      });
    }
  };
};

export const getJobById = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_JOB_DETAILS_REQUEST,
      });

      const response = await axios.get(
        `https://excho-job.herokuapp.com/jobs/${id}`
      );
      console.log("detail", response);
      dispatch({
        type: GET_JOB_DETAILS_SUCCESS,
        payload: response.data.data,
      });
      console.log(response.data.data);
    } catch (error) {
      dispatch({
        type: GET_JOB_DETAILS_FAILED,
        payload: error,
      });
    }
  };
};
