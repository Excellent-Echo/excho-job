import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import userRegisterAction from "../../redux/user/register/userRegisterAction";
import ExchoJobIcon from "../../components/ExchoJobIcon";
import GreetingSignUpJobSeeker from "../../components/GreetingSignUpJobSeeker";
import SignInText from "../../components/SignInText";

export default function JobSeekerSignUpPage() {
  const userRegisterData = useSelector((state) => state.userRegister);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userRegisterAction.resetForm());
    // eslint-disable-next-line
  }, []);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    dispatch(
      userRegisterAction.jobSeekerRegister(
        userRegisterData.fullName,
        userRegisterData.email,
        userRegisterData.password
      )
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h1>{JSON.stringify(userRegisterData)}</h1>
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
          {/*brand icon*/}
          <ExchoJobIcon />
          {/*brand icon*/}

          {/*greeting text*/}
          <GreetingSignUpJobSeeker />
          {/*greeting text*/}

          <p className="mt-2 text-center text-sm text-gray-600">
            Or
            {/*sign in text*/}
            <SignInText />
            {/*sign in text*/}
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleRegisterSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            {/*full name*/}
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Full name"
              />
            </div>
            {/*full name*/}

            {/*email*/}
            <div>
              <label className="sr-only">Email address</label>
              <input
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
            {/*email*/}

            {/*password*/}
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            {/*password*/}
          </div>

          {/*submit sign up button*/}
          <div>
            <button
              type="submit"
              value={userRegisterData.isLoading ? "Loading..." : "Register"}
              disabled={!!userRegisterData.isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign up
            </button>
          </div>
          {/*submit sign up button*/}
        </form>
      </div>
    </div>
  );
}