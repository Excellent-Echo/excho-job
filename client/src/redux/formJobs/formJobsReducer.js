const initialState = {
  companyName: "",
  address: "",
  industry: "",
  jobTitle: "",
  salary: 0,
  type: "",
  jobDescription: "",
  location: "",
  requirements: "",
  skills: "",
  category: "",
  errorMessage: "",
  successMessage: "",
  isLoading: false,
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "JOB_SET_RESET_FORM":
      return {
        ...initialState,
      };
    case "JOB_SET_COMPANYNAME":
      return {
        ...state,
        companyName: action.payload.companyname,
      };
    case "JOB_SET_INDUSTRY":
      return {
        ...state,
        industry: action.payload.industry,
      };
    case "JOB_SET_ADDRESS":
      return {
        ...state,
        address: action.payload.address,
      };
    case "JOB_SET_JOBTITLE":
      return {
        ...state,
        jobTitle: action.payload.jobtitle,
      };
    case "JOB_SET_SALARY":
      return {
        ...state,
        salary: action.payload.salary,
      };
    case "JOB_SET_TYPE":
      return {
        ...state,
        type: action.payload.type,
      };
    case "JOB_SET_DESCRIPTION":
      return {
        ...state,
        jobDescription: action.payload.jobdescription,
      };
    case "JOB_SET_LOCATION":
      return {
        ...state,
        location: action.payload.location,
      };
    case "JOB_SET_REQUIREMENTS":
      return {
        ...state,
        requirements: action.payload.requirements,
      };
    case "JOB_SET_SKILLS":
      return {
        ...state,
        skills: action.payload.skills,
      };
    case "JOB_SET_CATEGORY":
      return {
        ...state,
        category: action.payload.category,
      };

    case "JOB_SET_ERROR_MESSAGE":
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
      };

    case "JOB_SET_SUCCESS_MESSAGE":
      return {
        ...state,
        successMessage: action.payload.successMessage,
      };

    case "JOB_SET_START_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "JOB_SET_STOP_LOADING":
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default formReducer;
