import Axios from "axios";

const exchoJobClient = Axios.create({
  baseURL: "https://excho-job.herokuapp.com/",
});

export default exchoJobClient;
