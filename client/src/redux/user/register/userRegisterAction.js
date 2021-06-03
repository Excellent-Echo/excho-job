import exchoJobClient from "../../../APIs/jobSeekerClient";

const resetForm = () => {
  return {
    type: "USER_REGISTER_RESET_FORM",
  };
};

const setFullName = (fullname) => {
  return {
    type: "USER_REGISTER_SET_FULLNAME",
    payload: {
      fullname: fullname,
    },
  };
};

const setEmail = (email) => {
  return {
    type: "USER_REGISTER_SET_EMAIL",
    payload: {
      email: email,
    },
  };
};

const setPosition = (position) => {
  return {
    type: "USER_REGISTER_SET_POSITION",
    payload: {
      position: position,
    },
  };
};

const setPassword = (password) => {
  return {
    type: "USER_REGISTER_SET_PASSWORD",
    payload: {
      password: password,
    },
  };
};

const setErrorMessage = (errorMessage) => {
  return {
    type: "USER_REGISTER_SET_ERROR_MESSAGE",
    payload: {
      errorMessage: errorMessage,
    },
  };
};

const setSuccessMessage = (successMessage) => {
  return {
    type: "USER_REGISTER_SET_SUCCESS_MESSAGE",
    payload: {
      successMessage: successMessage,
    },
  };
};

const startLoading = () => {
  return {
    type: "USER_REGISTER_START_LOADING",
  };
};

const stopLoading = () => {
  return {
    type: "USER_REGISTER_STOP_LOADING",
  };
};

// register for job seeker
const jobSeekerRegister = (fullName, email, password) => async (dispatch) => {
  try {
    console.log("Click Button");
    dispatch(startLoading());
    dispatch(setSuccessMessage(""));
    dispatch(setErrorMessage(""));
    const addNewData = {
      full_name: fullName,
      email: email,
      password: password,
    };

    const user = await exchoJobClient({
      method: "POST",
      url: "/users/job-seeker/register",
      data: addNewData,
    });

    dispatch(
      setSuccessMessage("Success Registraion Job Seeker, now you can login")
    );
    dispatch(stopLoading());
  } catch (error) {
    console.log(error.response);
    dispatch(
      setErrorMessage(
        error.response.data.data.errors || ["internal server error"]
      )
    );
    dispatch(stopLoading());
  }
};

const userRegisterAction = {
  resetForm,
  setFullName,
  setEmail,
  setPosition,
  setPassword,
  jobSeekerRegister,
};

export default userRegisterAction;
