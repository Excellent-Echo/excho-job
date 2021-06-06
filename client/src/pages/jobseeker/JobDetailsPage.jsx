import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getJobById } from "../../redux/jobs/jobAction";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

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
          <div className="flex p-10 border rounded-xl">
            {/*company's logo*/}
            <div className="flex flex-1 items-center justify-center">
              <img
                className="h-16"
                src="https://www.crowde.co/static/images/logo-color.png"
                alt="Crowde's logo"
              />
            </div>
            {/*company's logo*/}

            {/*brief job desc*/}
            <div className="flex flex-1 items-center justify-center">
              <div className="flex flex-col">
                {/*job position*/}
                <span className="mb-2 text-2xl font-medium">
                  {jobDetail.job_tittle}
                </span>
                {/*job position*/}

                {/*Company location*/}
                <span className="mb-2 text-lg">{jobDetail.company_name}</span>
                {/*Company location*/}

                {/*salary*/}
                <span className="mb-2 text-lg">
                  {new Intl.NumberFormat("en-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(jobDetail.salary)}{" "}
                  per month
                </span>
                {/*salary*/}
                <span className="mb-2 text-lg">{jobDetail.category}</span>
                {/*info*/}
                {/* <span className="mb-2 text-lg ">
                  <span className="text-green-600">26 minutes ago</span> ◾{" "}
                  <span className="text-gray-500">1642 applicants</span>
                </span> */}
                {/*info*/}

                <button
                  className="px-4 py-2 text-white font-medium bg-blue-500 hover:bg-blue-600 border rounded-full"
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
            <p className="mb-6 mt-10">
              The job poster from {jobDetail.company_name}
            </p>
            <div className="">
              <div className="flex flex-1 items-center mb-6">
                <img
                  className="m-2 w-16 h-16 rounded-full"
                  src="https://cdn.techinasia.com/data/images/08582062e8379feccc7f8b8288181804.png"
                  alt=""
                />
                <div className="flex flex-col">
                  <p className="flex-1 font-medium">{jobDetail.company_name}</p>
                  <p className="flex-1">{jobDetail.job_tittle}</p>
                  <p className="flex-1">
                    {jobDetail.address}, {jobDetail.location}
                  </p>
                </div>
              </div>

              <div className="flex-1">
                <div className="mb-6">
                  <p className="mb-4 font-medium">Job Description</p>
                  <ul className="list-inside list-disc">
                    <li>{jobDetail.job_description}</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <p className="mb-4 font-medium">Type</p>
                  <ul className="list-inside list-disc">
                    <li>{jobDetail.type}</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <p className="mb-4 font-medium">Job Description</p>
                  <ul className="list-inside list-disc">
                    <li>{jobDetail.job_description}</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <p className="mb-4 font-medium">Skills</p>
                  <ul className="list-inside list-disc">
                    <li>{jobDetail.skills}</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <p className="mb-4 font-medium">Requirements</p>
                  <ul className="list-inside list-disc">
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