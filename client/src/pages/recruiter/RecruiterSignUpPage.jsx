import React from "react";
import ExchoJobIcon from "../../components/ExchoJobIcon";
import GreetingSignUpRecruiter from "../../components/GreetingSignUpRecruiter";
import SignInText from "../../components/SignInText";

export default function RecruiterSignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <p>testing</p>
      <div className="max-w-md w-full space-y-8">
        <div>
          {/*brand icon*/}
          <ExchoJobIcon />
          {/*brand icon*/}

          {/*greeting text*/}
          <GreetingSignUpRecruiter />
          {/*greeting text*/}

          <p className="mt-2 text-center text-sm text-gray-600">
            Or
            {/*sign in text*/}
            <SignInText />
            {/*sign in text*/}
          </p>
        </div>

        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            {/*full name*/}
            <div>
              <label htmlFor="full-name" className="sr-only">
                Full name
              </label>
              <input
                name="fullname"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Full name"
              />
            </div>
            {/*full name*/}

            {/*email*/}
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                name="email"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            {/*email*/}

            {/*position*/}
            <div>
              <label htmlFor="full-name" className="sr-only">
                Position
              </label>
              <input
                name="position"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Position"
              />
            </div>
            {/*position*/}

            {/*password*/}
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
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