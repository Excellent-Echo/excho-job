import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import formInputAction from "../../redux/formJobs/formJobsAction";
import Header from "../../components/Header";

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
      <Header />
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Recruiter Form</h1>
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

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/*post job details*/}
          <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Post Job Details
                  </h3>
                  <p className="mt-1 text-sm text-gray-600"></p>
                </div>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <form onSubmit={handleFormSubmit}>
                  <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label
                            htmlFor="job-position"
                            className="block text-sm font-medium text-gray-700"
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
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label
                            htmlFor="job-position"
                            className="block text-sm font-medium text-gray-700"
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
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label
                            htmlFor="job-position"
                            className="block text-sm font-medium text-gray-700"
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
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label
                            htmlFor="job-position"
                            className="block text-sm font-medium text-gray-700"
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
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label
                            htmlFor="salary"
                            className="block text-sm font-medium text-gray-700"
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
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label
                            htmlFor="salary"
                            className="block text-sm font-medium text-gray-700"
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
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label
                            htmlFor="job_type"
                            className="block text-sm font-medium text-gray-700"
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
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          >
                            <option value="Full Time">Full time</option>
                            <option value="Part Time">Part Time</option>
                            <option value="Intership">Internship</option>
                          </select>
                        </div>

                        <div className="col-span-6 sm:col-span-6">
                          <label
                            htmlFor="job_description"
                            className="block text-sm font-medium text-gray-700"
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
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                              placeholder="type here..."
                            />
                          </div>
                          <p className="mt-2 text-sm text-gray-500">
                            A brief description of the job being applied for.
                          </p>
                        </div>

                        <div className="col-span-6 sm:col-span-6">
                          <label
                            htmlFor="job_description"
                            className="block text-sm font-medium text-gray-700"
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
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                              placeholder="type here..."
                            />
                          </div>
                          <p className="mt-2 text-sm text-gray-500">
                            A brief location of the job being applied for.
                          </p>
                        </div>

                        <div className="col-span-6 sm:col-span-6">
                          <label
                            htmlFor="requirements"
                            className="block text-sm font-medium text-gray-700"
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
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                              placeholder="you@example.com"
                            />
                          </div>
                          <p className="mt-2 text-sm text-gray-500">
                            A brief description of the requirements for the job
                            being applied for.
                          </p>
                        </div>

                        <div className="col-span-6 sm:col-span-6">
                          <label
                            htmlFor="about"
                            className="block text-sm font-medium text-gray-700"
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
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                              placeholder="you@example.com"
                            />
                          </div>
                          <p className="mt-2 text-sm text-gray-500">
                            Brief description for your Skills will much appl for
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button
                        type="submit"
                        value={formData.isLoading ? "Loading..." : "Register"}
                        disabled={formData.isLoading ? true : false}
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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