import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getJobById } from "../../redux/jobs/jobAction";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
// import UserHeader from "../../components/UserHeader";

export default function JobDetailsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getJobById(id));
    // eslint-disable-next-line
  }, []);

  const detailJob = useSelector((state) => state.jobReducer);
  const { jobDetail } = detailJob;
  console.log(jobDetail);

  let history = useHistory();

  const handleClick = () => {
    try {
      history.push("/modal");
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Success Apply",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
      });
    }
  };

  return (
    <>
      {/* <UserHeader /> */}
      {/*container*/}
      <div className="flex m-10">
        {/*job*/}
        <div className="w-8/12">
          {/*job banner*/}
          <div className="border rounded-xl p-10 flex">
            {/*company's logo*/}
            <div className="flex flex-1 justify-center items-center">
              <img
                className="h-16"
                src="https://www.crowde.co/static/images/logo-color.png"
                alt="Crowde's logo"
              />
            </div>
            {/*company's logo*/}

            {/*brief job desc*/}
            <div className="flex-1 flex justify-center items-center">
              <div className="flex flex-col">
                {/*job position*/}
                <span className="mb-2 text-2xl font-medium">
                  {jobDetail.job_tittle}
                </span>
                {/*job position*/}

                {/*Company location*/}
                <span className="mb-2 text-lg ">{jobDetail.company_name}</span>
                {/*Company location*/}

                {/*salary*/}
                <span className="mb-2 text-lg ">
                  {new Intl.NumberFormat("en-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(jobDetail.salary)}{" "}
                  per month
                </span>
                {/*salary*/}
                <span className="mb-2 text-lg ">{jobDetail.category}</span>
                {/*info*/}
                {/* <span className="mb-2 text-lg ">
                  <span className="text-green-600">26 minutes ago</span> ◾{" "}
                  <span className="text-gray-500">1642 applicants</span>
                </span> */}
                {/*info*/}

                <button
                  className="border hover:bg-blue-600 rounded-full px-4 py-2 font-medium bg-blue-500 text-white"
                  onClick={handleClick}
                >
                  Apply Now
                </button>
              </div>
            </div>
            {/*brief job desc*/}
          </div>
          {/*job banner*/}

          {/*job details*/}
          <div className="ml-8 w-9/12">
            <p className="mt-10 mb-6">
              The job poster from {jobDetail.company_name}
            </p>
            <div className="">
              <div className="flex mb-6 items-center flex-1">
                <img
                  className="h-16 w-16 rounded-full m-2"
                  src="https://cdn.techinasia.com/data/images/08582062e8379feccc7f8b8288181804.png"
                  alt=""
                />
                <div className="flex flex-col ">
                  <p className="font-medium flex-1">{jobDetail.company_name}</p>
                  <p className=" flex-1">{jobDetail.job_tittle}</p>
                  <p className=" flex-1">
                    {jobDetail.address}, {jobDetail.location}
                  </p>
                </div>
              </div>

              <div className="flex-1">
                <div className="mb-6">
                  <p className="font-medium mb-4">Job Description</p>
                  <ul className="list-disc list-inside">
                    <li>{jobDetail.job_description}</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <p className="font-medium mb-4">Type</p>
                  <ul className="list-disc list-inside">
                    <li>{jobDetail.type}</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <p className="font-medium mb-4">Job Description</p>
                  <ul className="list-disc list-inside">
                    <li>{jobDetail.job_description}</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <p className="font-medium mb-4">Skills</p>
                  <ul className="list-disc list-inside">
                    <li>{jobDetail.skills}</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <p className="font-medium mb-4">Requirements</p>
                  <ul className="list-disc list-inside">
                    <li>{jobDetail.requirements}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/*job details*/}
        </div>
        {/*job*/}
      </div>
      {/*container*/}
    </>
  );
}