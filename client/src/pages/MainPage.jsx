import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getJobAction } from "../redux/jobs/jobAction";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";

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
    <>
      <Header />
      <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Get the dream</span>{" "}
            <span className="block text-indigo-600 xl:inline">
              job you want
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            {/*Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui*/}
            {/*lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat*/}
            {/*fugiat aliqua.*/}
          </p>

          <div className="mt-5 mb-20 sm:mt-8 grid grid-cols-12 gap-6">
            <div className="md:mt-3 sm:mt-0 col-span-12 sm:col-span-3">
              <label htmlFor="search_job" className="sr-only">
                Search Job
              </label>
              <input
                type="text"
                name="search_job"
                id="search_job"
                className="w-full font-medium rounded-lg text-indigo-600 bg-white md:py-4 md:text-lg md:px-10"
                placeholder="Search job"
              />
            </div>

            <div className="md:mt-3 sm:mt-0 col-span-12 sm:col-span-3">
              <label
                htmlFor="country"
                className="sr-only block text-sm font-medium text-gray-700"
              >
                Location
              </label>
              <select
                id="country"
                name="country"
                autoComplete="country"
                className="w-full font-medium rounded-lg text-indigo-600 bg-white md:py-4 md:text-lg md:px-10"
              >
                <option>Location</option>
              </select>
            </div>

            <div className="md:mt-3 sm:mt-0 col-span-12 sm:col-span-3">
              <label
                htmlFor="country"
                className="sr-only block text-sm font-medium text-gray-700"
              >
                Type
              </label>
              <select
                id="country"
                name="country"
                autoComplete="country"
                className="w-full font-medium rounded-lg text-indigo-600 bg-white md:py-4 md:text-lg md:px-10"
              >
                <option>Type</option>
              </select>
            </div>

            <div className="md:mt-3 sm:mt-0 col-span-12 sm:col-span-3">
              <label
                htmlFor="country"
                className="sr-only block text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <select
                id="country"
                name="country"
                autoComplete="country"
                className="w-full font-medium rounded-lg text-indigo-600 bg-white md:py-4 md:text-lg md:px-10"
              >
                <option>Category</option>
              </select>
            </div>
          </div>
        </div>

        <main className="grid grid-cols-12 gap-6 my-10">
          {loading ? (
            <h1>Loading</h1>
          ) : error ? (
            <h1>Error</h1>
          ) : (
            <>
              {listJob.map((job) => (
                <React.Fragment>
                  <div className="hover:shadow-lg duration-300 border-2 h-60 rounded-xl col-span-12 sm:col-span-6 lg:col-span-4 sm:w-full flex flex-col p-4">
                    <div className="flex justify-center">
                      <img
                        className="h-16 mr-4"
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
                          className="font-medium text-blue-900"
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
        <div className="bg-white px-4 py-3 flex items-center justify-center border-t border-gray-200 sm:px-6">
          <div className="sm:flex-1 sm:flex sm:items-center sm:justify-center">
            <div>
              <nav
                className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                aria-label="Pagination"
              >
                <a
                  href="/#"
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="h-5 w-5"
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
                  className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  1
                </a>
                <a
                  href="/#"
                  className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  2
                </a>
                <a
                  href="/#"
                  className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                >
                  3
                </a>
                <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                  ...
                </span>
                <a
                  href="/#"
                  className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                >
                  8
                </a>
                <a
                  href="/#"
                  className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  9
                </a>
                <a
                  href="/#"
                  className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  10
                </a>
                <a
                  href="/#"
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Next</span>

                  <svg
                    className="h-5 w-5"
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
      </div>
    </>
  );
}