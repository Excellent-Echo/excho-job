import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getJobAction } from "../redux/jobs/jobAction";
import { useHistory } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainPage() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.jobReducer);
  console.log("selector view", selector);
  const { listJob, loading, error } = selector;

  const history = useHistory();

  const handleClick = (id) => {
    history.push(`/job-detail/${id}`);
  };

  useEffect(() => {
    dispatch(getJobAction());
  }, [dispatch]);

  return (
    <div className="select-none">
      <Navbar />

      <div className="mt-10 mx-auto px-4 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="text-center">
          <h1 className="text-gray-900 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            <span>Get your</span>{" "}
            <span className="text-indigo-600">dream job</span>
          </h1>
          <p className="mt-3 mx-auto text-gray-500 text-base sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl">
            Displays a list of jobs based on where you are, the type of work
            time and the category of work in what field.
          </p>

          <div className="grid gap-6 grid-cols-12 mb-20 mt-5 sm:mt-8">
            <div className="col-span-12 sm:col-span-3 sm:mt-0 md:mt-3">
              <label htmlFor="search_job" className="sr-only">
                Search Job
              </label>
              <input
                type="text"
                name="search_job"
                id="search_job"
                className="w-full text-indigo-600 font-medium bg-white rounded-lg md:px-10 md:py-4 md:text-lg"
                placeholder="Search job"
              />
            </div>

            <div className="col-span-12 sm:col-span-3 sm:mt-0 md:mt-3">
              <label
                htmlFor="country"
                className="block text-gray-700 text-sm font-medium sr-only"
              >
                Location
              </label>
              <select
                id="country"
                name="country"
                autoComplete="country"
                className="w-full text-indigo-600 font-medium bg-white rounded-lg md:px-10 md:py-4 md:text-lg"
              >
                <option>Location</option>
              </select>
            </div>

            <div className="col-span-12 sm:col-span-3 sm:mt-0 md:mt-3">
              <label
                htmlFor="country"
                className="block text-gray-700 text-sm font-medium sr-only"
              >
                Type
              </label>
              <select
                id="country"
                name="country"
                autoComplete="country"
                className="w-full text-indigo-600 font-medium bg-white rounded-lg md:px-10 md:py-4 md:text-lg"
              >
                <option>Type</option>
              </select>
            </div>

            <div className="col-span-12 sm:col-span-3 sm:mt-0 md:mt-3">
              <label
                htmlFor="country"
                className="block text-gray-700 text-sm font-medium sr-only"
              >
                Category
              </label>
              <select
                id="country"
                name="country"
                autoComplete="country"
                className="w-full text-indigo-600 font-medium bg-white rounded-lg md:px-10 md:py-4 md:text-lg"
              >
                <option>Category</option>
              </select>
            </div>
          </div>
        </div>

        <main className="grid gap-6 grid-cols-12 my-10">
          {loading ? (
            <h1 className="col-span-12 text-center text-3xl">
              <i className="bx bx-loader-circle bx-spin"></i>Loading
            </h1>
          ) : error ? (
            <h1>Error</h1>
          ) : (
            <>
              {listJob.map((job) => (
                <React.Fragment>
                  <div className="flex flex-col col-span-12 p-4 h-60 border-2 rounded-xl hover:shadow-lg duration-300 sm:col-span-6 sm:w-full lg:col-span-4">
                    <div className="flex justify-center">
                      <img
                        className="mr-4 h-16"
                        src="https://www.crowde.co/static/images/logo-color.png"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="mb-1 font-medium">{job.job_tittle}</span>
                      <span className="mb-1">{job.company_name}</span>
                      <span className="mb-1 text-gray-500">{job.location}</span>
                      <span className="mb-1 text-gray-500">id: {job.id}</span>
                      <span className="">
                        <span
                          onClick={() => handleClick(job.id)}
                          className="text-blue-900 font-medium"
                        >
                          See Details
                        </span>
                      </span>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </>
          )}
        </main>

        {/*pagination*/}
        <div className="flex items-center justify-center px-4 py-3 bg-white sm:px-6">
          <div className="sm:flex sm:flex-1 sm:items-center sm:justify-center">
            <div>
              <nav
                className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                aria-label="Pagination"
              >
                <a
                  href="/#"
                  className="relative inline-flex items-center px-2 py-2 text-gray-500 text-sm font-medium hover:bg-gray-50 bg-white border border-gray-300 rounded-l-md"
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="/#"
                  aria-current="page"
                  className="relative z-10 inline-flex items-center px-4 py-2 text-indigo-600 text-sm font-medium bg-indigo-50 border border-indigo-500"
                >
                  1
                </a>
                <a
                  href="/#"
                  className="relative inline-flex items-center px-4 py-2 text-gray-500 text-sm font-medium hover:bg-gray-50 bg-white border border-gray-300"
                >
                  2
                </a>
                <a
                  href="/#"
                  className="relative hidden items-center px-4 py-2 text-gray-500 text-sm font-medium hover:bg-gray-50 bg-white border border-gray-300 md:inline-flex"
                >
                  3
                </a>
                <span className="relative inline-flex items-center px-4 py-2 text-gray-700 text-sm font-medium bg-white border border-gray-300">
                  ...
                </span>
                <a
                  href="/#"
                  className="relative hidden items-center px-4 py-2 text-gray-500 text-sm font-medium hover:bg-gray-50 bg-white border border-gray-300 md:inline-flex"
                >
                  8
                </a>
                <a
                  href="/#"
                  className="relative inline-flex items-center px-4 py-2 text-gray-500 text-sm font-medium hover:bg-gray-50 bg-white border border-gray-300"
                >
                  9
                </a>
                <a
                  href="/#"
                  className="relative inline-flex items-center px-4 py-2 text-gray-500 text-sm font-medium hover:bg-gray-50 bg-white border border-gray-300"
                >
                  10
                </a>
                <a
                  href="/#"
                  className="relative inline-flex items-center px-2 py-2 text-gray-500 text-sm font-medium hover:bg-gray-50 bg-white border border-gray-300 rounded-r-md"
                >
                  <span className="sr-only">Next</span>

                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </div>
        {/*pagination*/}

        <Footer />
      </div>
    </div>
  );
}