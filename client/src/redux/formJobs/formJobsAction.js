import exchoJobClient from "../../APIs/jobSeekerClient";

const resetForm = () => {
  return {
    type: "JOB_SET_RESET_FORM",
  };
};

const setCompanyName = (companyname) => {
  return {
    type: "JOB_SET_COMPANYNAME",
    payload: {
      companyname: companyname,
    },
  };
};

const setAddress = (address) => {
  return {
    type: "JOB_SET_ADDRESS",
    payload: {
      address: address,
    },
  };
};

const setIndustry = (industry) => {
  return {
    type: "JOB_SET_INDUSTRY",
    payload: {
      industry: industry,
    },
  };
};

const setJobTitle = (jobtitle) => {
  return {
    type: "JOB_SET_JOBTITLE",
    payload: {
      jobtitle: jobtitle,
    },
  };
};

const setSalary = (salary) => {
  return {
    type: "JOB_SET_SALARY",
    payload: {
      salary: salary,
    },
  };
};

const setType = (type) => {
  return {
    type: "JOB_SET_TYPE",
    payload: {
      type: type,
    },
  };
};

const setDescription = (description) => {
  return {
    type: "JOB_SET_DESCRIPTION",
    payload: {
      description: description,
    },
  };
};

const setLocation = (location) => {
  return {
    type: "JOB_SET_LOCATION",
    payload: {
      location: location,
    },
  };
};

const setRequirements = (requirements) => {
  return {
    type: "JOB_SET_REQUIREMENTS",
    payload: {
      requirements: requirements,
    },
  };
};

const setSkills = (skills) => {
  return {
    type: "JOB_SET_SKILLS",
    payload: {
      skills: skills,
    },
  };
};

const setCategory = (category) => {
  return {
    type: "JOB_SET_CATEGORY",
    payload: {
      category: category,
    },
  };
};

const setErrorMessage = (errorMessage) => {
  return {
    type: "JOB_SET_ERROR_MESSAGE",
    payload: {
      errorMessage: errorMessage,
    },
  };
};

const setSuccessMessage = (successMessage) => {
  return {
    type: "JOB_SET_SUCCESS_MESSAGE",
    payload: {
      successMessage: successMessage,
    },
  };
};

const startLoading = () => {
  return {
    type: "JOB_SET_START_LOADING",
  };
};

const stopLoading = () => {
  return {
    type: "JOB_SET_START_LOADING",
  };
};

const jobFormInput =
  (
    companyName,
    address,
    industry,
    jobTitle,
    salary,
    type,
    jobDescription,
    location,
    requirements,
    skills,
    category
  ) =>
  async (dispatch) => {
    try {
      console.log("Click Button");
      dispatch(startLoading());
      dispatch(setSuccessMessage(""));
      dispatch(setErrorMessage(""));
      const addNewData = {
        company_name: companyName,
        address: address,
        industry: industry,
        job_tittle: jobTitle,
        salary: salary,
        type: type,
        job_description: jobDescription,
        location: location,
        requirements: requirements,
        skills: skills,
        category: category,
      };

     

      const jobs = await exchoJobClient({
        method: "POST",
        url: "/jobs/add",
        data: addNewData,
        headers: {
            Authorization: localStorage.getItem("accessToken"),
          },
      });

      dispatch(setSuccessMessage("Success Post Job"));

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

const formInputAction = {
  resetForm,
  setCompanyName,
  setAddress,
  setIndustry,
  setJobTitle,
  setSalary,
  setType,
  setDescription,
  setLocation,
  setRequirements,
  setSkills,
  setCategory,
  jobFormInput,
};

export default formInputAction;
