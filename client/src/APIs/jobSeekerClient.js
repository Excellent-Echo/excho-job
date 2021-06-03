import Axios from "axios";

const jobSeekerClient = Axios.create({
    baseURL: "https://excho-job.herokuapp.com/",
});

export default jobSeekerClient;