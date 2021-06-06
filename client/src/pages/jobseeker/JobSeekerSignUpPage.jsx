import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import userRegisterAction from "../../redux/user/register/userRegisterAction";
import ExchoJobIcon from "../../components/ExchoJobIcon";
import SignInText from "../../components/SignInText";

export default function JobSeekerSignUpPage() {
  const userRegisterData = useSelector((state) => state.userRegister);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(userRegisterAction.resetForm());
    // eslint-disable-next-line
  }, []);

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    dispatch(
      userRegisterAction.jobSeekerRegister(
        userRegisterData.fullName,
        userRegisterData.email,
        userRegisterData.password,
        history
      )
    );
  };

  return (
    <div className="flex items-center justify-center px-4 py-12 min-h-screen bg-gray-50 select-none sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        {/* <h1>{JSON.stringify(userRegisterData)}</h1> */}
        {/* Error Message */}
        {userRegisterData.errorMessage && (
          <ul>
            {userRegisterData.errorMessage.map((error, index) => {
              return <li key={index}>{error}</li>;
            })}
          </ul>
        )}

        {/* Success Message */}
        {userRegisterData.successMessage && (
          <p>{userRegisterData.successMessage}</p>
        )}

        <div>
          <ExchoJobIcon />
          <h2 className="mt-6 text-center text-gray-900 text-3xl font-extrabold">
            <span className="text-yellow-500">Sign up</span> to be Job Seeker
          </h2>
          <p className="mt-2 text-center text-gray-600 text-sm">
            Or
            <SignInText />
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleRegisterSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="full-name" className="sr-only">
                Full name
              </label>
              <input
                type="text"
                required
                value={userRegisterData.fullName}
                onChange={(event) =>
                  dispatch(userRegisterAction.setFullName(event.target.value))
                }
                className="placeholder-gray-500 relative focus:z-10 block px-3 py-2 w-full text-gray-900 text-yellow-500 border border-gray-300 focus:border-indigo-500 rounded-none rounded-t-md focus:outline-none appearance-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Full name"
              />
            </div>
            <div>
              <label className="sr-only">Email address</label>
              <input
                type="email"
                required
                value={userRegisterData.email}
                onChange={(event) =>
                  dispatch(userRegisterAction.setEmail(event.target.value))
                }
                className="placeholder-gray-500 relative focus:z-10 block px-3 py-2 w-full text-gray-900 text-yellow-500 border border-gray-300 focus:border-indigo-500 rounded-none focus:outline-none appearance-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type="password"
                required
                value={userRegisterData.password}
                onChange={(event) =>
                  dispatch(userRegisterAction.setPassword(event.target.value))
                }
                className="placeholder-gray-500 relative focus:z-10 block px-3 py-2 w-full text-gray-900 text-yellow-500 border border-gray-300 focus:border-indigo-500 rounded-b-md rounded-none focus:outline-none appearance-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              value={userRegisterData.isLoading ? "Loading..." : "Register"}
              disabled={userRegisterData.isLoading ? true : false}
              className="group relative flex justify-center px-4 py-2 w-full text-white text-sm font-medium bg-blue-700 hover:bg-blue-800 border border-transparent rounded-md focus:outline-none focus:ring-blue-500 focus:ring-offset-2 focus:ring-2"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}