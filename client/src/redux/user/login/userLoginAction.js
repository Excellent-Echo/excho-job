import exchoJobClient from "../../../APIs/jobSeekerClient";

const setEmail = (email) => {
  return {
    type: "USER_LOGIN_SET_EMAIL",
    payload: {
      email: email,
    },
  };
};

const setPassword = (password) => ({
  type: "USER_LOGIN_SET_PASSWORD",
  payload: {
    password: password,
  },
});

const setErrorMessage = (errorMessage) => ({
  type: "USER_LOGIN_SET_ERROR_MESSAGE",
  payload: {
    errorMessage: errorMessage,
  },
});

const startLoading = () => ({
  type: "USER_LOGIN_START_LOADING",
});

const stopLoading = () => ({
  type: "USER_LOGIN_STOP_LOADING",
});

const loginRecruiter = (email, password) => async (dispatch) => {
  try {
    dispatch(startLoading());
    dispatch(setErrorMessage(""));

    const loginData = {
      email: email,
      password: password,
    };

    const user = await exchoJobClient({
      method: "POST",
      url: "/users/hire/login",
      data: loginData,
    });

    const accessToken = user.data.data.token;

    localStorage.setItem("accessToken", accessToken);

    dispatch(stopLoading());
  } catch (error) {
    console.log(error);
    dispatch(stopLoading());
  }
};

const loginJobSeeker = (email, password) => async (dispatch) => {
  try {
    dispatch(startLoading());
    dispatch(setErrorMessage(""));

    const loginData = {
      email: email,
      password: password,
    };

    const user = await exchoJobClient({
      method: "POST",
      url: "/users/job-seeker/login",
      data: loginData,
    });

    const accessToken = user.data.data.token;

    localStorage.setItem("accessToken", accessToken);

    dispatch(stopLoading());
  } catch (error) {
    console.log(error);
    dispatch(stopLoading());
  }
};

const userLoginAction = {
  setEmail,
  setPassword,
  loginJobSeeker,
  loginRecruiter,
};

export default userLoginAction;
