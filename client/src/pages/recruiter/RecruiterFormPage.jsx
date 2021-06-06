import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import formInputAction from "../../redux/formJobs/formJobsAction";
import Navbar from "../../components/Navbar";

export default function RecruiterFormPage() {
  const formData = useSelector((state) => state.formJob);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(formInputAction.resetForm());
    // eslint-disable-next-line
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(
      formInputAction.jobFormInput(
        formData.companyName,
        formData.address,
        formData.industry,
        formData.jobTitle,
        formData.salary,
        formData.type,
        formData.jobDescription,
        formData.location,
        formData.requirements,
        formData.skills,
        formData.category
      )
    );
  };

  return (
    <div className="select-none">
      <Navbar />
      <header className="bg-white shadow">
        <div className="mx-auto px-4 py-6 max-w-7xl sm:px-6 lg:px-8">
          <h1 className="text-gray-900 text-3xl font-bold">Recruiter Form</h1>
        </div>
      </header>

      <h1>{JSON.stringify(formData)}</h1>
      {/* Error Message */}
      {formData.errorMessage && (
        <ul>
          {formData.errorMessage.map((error, index) => {
            return <li key={index}>{error}</li>;
          })}
        </ul>
      )}

      {/* Success Message */}
      {formData.successMessage && <p>{formData.successMessage}</p>}

      <div className="mx-auto py-6 max-w-7xl sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/*post job details*/}
          <div className="mt-10 sm:mt-0">
            <div className="md:grid md:gap-6 md:grid-cols-3">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-gray-900 text-lg font-medium leading-6">
                    Post Job Details
                  </h3>
                  <p className="mt-1 text-gray-600 text-sm"></p>
                </div>
              </div>
              <div className="mt-5 md:col-span-2 md:mt-0">
                <form onSubmit={handleFormSubmit}>
                  <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                      <div className="grid gap-6 grid-cols-6">
                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label
                            htmlFor="job-position"
                            className="block text-gray-700 text-sm font-medium"
                          >
                            Company Name
                          </label>
                          <input
                            type="text"
                            value={formData.companyName}
                            onChange={(event) =>
                              dispatch(
                                formInputAction.setCompanyName(
                                  event.target.value
                                )
                              )
                            }
                            className="block mt-1 w-full border-gray-300 focus:border-indigo-500 rounded-md shadow-sm focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label
                            htmlFor="job-position"
                            className="block text-gray-700 text-sm font-medium"
                          >
                            Address
                          </label>
                          <input
                            type="text"
                            value={formData.address}
                            onChange={(event) =>
                              dispatch(
                                formInputAction.setAddress(event.target.value)
                              )
                            }
                            className="block mt-1 w-full border-gray-300 focus:border-indigo-500 rounded-md shadow-sm focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label
                            htmlFor="job-position"
                            className="block text-gray-700 text-sm font-medium"
                          >
                            Industry
                          </label>
                          <input
                            type="text"
                            value={formData.industry}
                            onChange={(event) =>
                              dispatch(
                                formInputAction.setIndustry(event.target.value)
                              )
                            }
                            className="block mt-1 w-full border-gray-300 focus:border-indigo-500 rounded-md shadow-sm focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label
                            htmlFor="job-position"
                            className="block text-gray-700 text-sm font-medium"
                          >
                            Job Title
                          </label>
                          <input
                            type="text"
                            value={formData.jobTitle}
                            onChange={(event) =>
                              dispatch(
                                formInputAction.setJobTitle(event.target.value)
                              )
                            }
                            className="block mt-1 w-full border-gray-300 focus:border-indigo-500 rounded-md shadow-sm focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label
                            htmlFor="salary"
                            className="block text-gray-700 text-sm font-medium"
                          >
                            Salary
                          </label>
                          <input
                            type="number"
                            value={formData.salary}
                            onChange={(event) =>
                              dispatch(
                                formInputAction.setSalary(event.target.value)
                              )
                            }
                            className="block mt-1 w-full border-gray-300 focus:border-indigo-500 rounded-md shadow-sm focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label
                            htmlFor="salary"
                            className="block text-gray-700 text-sm font-medium"
                          >
                            Category
                          </label>
                          <input
                            type="text"
                            value={formData.category}
                            onChange={(event) =>
                              dispatch(
                                formInputAction.setCategory(event.target.value)
                              )
                            }
                            className="block mt-1 w-full border-gray-300 focus:border-indigo-500 rounded-md shadow-sm focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label
                            htmlFor="job_type"
                            className="block text-gray-700 text-sm font-medium"
                          >
                            Type
                          </label>
                          <select
                            value={formData.type}
                            onChange={(event) =>
                              dispatch(
                                formInputAction.setType(event.target.value)
                              )
                            }
                            className="block mt-1 px-3 py-2 w-full bg-white border border-gray-300 focus:border-indigo-500 rounded-md focus:outline-none shadow-sm focus:ring-indigo-500 sm:text-sm"
                          >
                            <option value="Full Time">Full time</option>
                            <option value="Part Time">Part Time</option>
                            <option value="Intership">Internship</option>
                          </select>
                        </div>

                        <div className="col-span-6 sm:col-span-6">
                          <label
                            htmlFor="job_description"
                            className="block text-gray-700 text-sm font-medium"
                          >
                            Job Description
                          </label>
                          <div className="mt-1">
                            <textarea
                              type="text"
                              value={formData.jobDescription}
                              onChange={(event) =>
                                dispatch(
                                  formInputAction.setDescription(
                                    event.target.value
                                  )
                                )
                              }
                              rows={3}
                              className="block mt-1 w-full border-gray-300 focus:border-indigo-500 rounded-md shadow-sm focus:ring-indigo-500 sm:text-sm"
                              placeholder="type here..."
                            />
                          </div>
                          <p className="mt-2 text-gray-500 text-sm">
                            A brief description of the job being applied for.
                          </p>
                        </div>

                        <div className="col-span-6 sm:col-span-6">
                          <label
                            htmlFor="job_description"
                            className="block text-gray-700 text-sm font-medium"
                          >
                            Location
                          </label>
                          <div className="mt-1">
                            <textarea
                              type="text"
                              value={formData.location}
                              onChange={(event) =>
                                dispatch(
                                  formInputAction.setLocation(
                                    event.target.value
                                  )
                                )
                              }
                              rows={3}
                              className="block mt-1 w-full border-gray-300 focus:border-indigo-500 rounded-md shadow-sm focus:ring-indigo-500 sm:text-sm"
                              placeholder="type here..."
                            />
                          </div>
                          <p className="mt-2 text-gray-500 text-sm">
                            A brief location of the job being applied for.
                          </p>
                        </div>

                        <div className="col-span-6 sm:col-span-6">
                          <label
                            htmlFor="requirements"
                            className="block text-gray-700 text-sm font-medium"
                          >
                            Requirements
                          </label>
                          <div className="mt-1">
                            <textarea
                              type="text"
                              value={formData.requirements}
                              onChange={(event) =>
                                dispatch(
                                  formInputAction.setRequirements(
                                    event.target.value
                                  )
                                )
                              }
                              rows={3}
                              className="block mt-1 w-full border-gray-300 focus:border-indigo-500 rounded-md shadow-sm focus:ring-indigo-500 sm:text-sm"
                              placeholder="you@example.com"
                            />
                          </div>
                          <p className="mt-2 text-gray-500 text-sm">
                            A brief description of the requirements for the job
                            being applied for.
                          </p>
                        </div>

                        <div className="col-span-6 sm:col-span-6">
                          <label
                            htmlFor="about"
                            className="block text-gray-700 text-sm font-medium"
                          >
                            Skills
                          </label>
                          <div className="mt-1">
                            <textarea
                              type="text"
                              value={formData.skills}
                              onChange={(event) =>
                                dispatch(
                                  formInputAction.setSkills(event.target.value)
                                )
                              }
                              rows={3}
                              className="block mt-1 w-full border-gray-300 focus:border-indigo-500 rounded-md shadow-sm focus:ring-indigo-500 sm:text-sm"
                              placeholder="you@example.com"
                            />
                          </div>
                          <p className="mt-2 text-gray-500 text-sm">
                            Brief description for your Skills will much appl for
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
                      <button
                        type="submit"
                        value={formData.isLoading ? "Loading..." : "Register"}
                        disabled={formData.isLoading ? true : false}
                        className="inline-flex justify-center px-4 py-2 text-white text-sm font-medium bg-indigo-600 hover:bg-indigo-700 border border-transparent rounded-md focus:outline-none shadow-sm focus:ring-indigo-500 focus:ring-offset-2 focus:ring-2"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/*post job details*/}
        </div>
      </div>
    </div>
  );
}