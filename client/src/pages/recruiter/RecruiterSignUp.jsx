import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import userRegisterAction from "../../redux/user/register/userRegisterAction";

export default function RecruiterSignUp() {
  const userRegisterData = useSelector((state) => state.userRegister);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(userRegisterAction.resetForm());
    // eslint-disable-next-line
  }, []);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    dispatch(
      userRegisterAction.recruiterRegister(
        userRegisterData.fullName,
        userRegisterData.email,
        userRegisterData.position,
        userRegisterData.password,
        history
      )
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
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
          <img
            className="mx-auto h-12 w-auto"
            src="https://res.cloudinary.com/dulqd0xea/image/upload/v1622618507/excho-job/job-seeker-icon-3_mevmq5.png"
            alt="Excho Job's Icon"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign up to be recruiter
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or
            <p className="text-center text-base font-medium text-gray-500">
              Already have an account
              <a href="/#" className="text-indigo-600 hover:text-indigo-500">
                <Link to="/signin-recruiter">Sign in</Link>
              </a>
            </p>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleRegisterSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label className="sr-only">Full name</label>
              <input
                name="fullname"
                type="text"
                required
                value={userRegisterData.fullName}
                onChange={(event) =>
                  dispatch(userRegisterAction.setFullName(event.target.value))
                }
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Full name"
              />
            </div>
            <div>
              <label className="sr-only">Email address</label>
              <input
                name="email"
                type="email"
                required
                value={userRegisterData.email}
                onChange={(event) =>
                  dispatch(userRegisterAction.setEmail(event.target.value))
                }
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label className="sr-only">Position</label>
              <input
                type="text"
                required
                value={userRegisterData.position}
                onChange={(event) =>
                  dispatch(userRegisterAction.setPosition(event.target.value))
                }
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Position"
              />
            </div>
            <div>
              <label className="sr-only">Password</label>
              <input
                type="password"
                required
                value={userRegisterData.password}
                onChange={(event) =>
                  dispatch(userRegisterAction.setPassword(event.target.value))
                }
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              value={userRegisterData.isLoading ? "Loading..." : "Register"}
              disabled={userRegisterData.isLoading ? true : false}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
