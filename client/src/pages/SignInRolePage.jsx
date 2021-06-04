import React from "react";
// import ExchoJobIcon from "../components/ExchoJobIcon";
import { Link } from "react-router-dom";
// import SignUpText from "../components/SignUpText";

export default function SignInRolePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          {/*brand icon*/}
          {/* <ExchoJobIcon /> */}
          {/*brand icon*/}

          {/*greeting text*/}
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 mb-4">
            <span className="text-yellow-500">Sign in</span> to your account as
          </h2>
          {/*greeting text*/}

          {/*role*/}
          <div className="flex">
            <Link
              className="flex-1 p-8 text-xl m-4 bg-white flex justify-center rounded-xl font-medium border-2 border-blue-600 text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-600 focus:ring-2 focus:ring-blue-400"
              to="/signin-jobseeker"
            >
              Job Seeker
            </Link>
            <Link
              className="flex-1 p-8 text-xl m-4 bg-white flex justify-center rounded-xl font-medium border-2 border-blue-600 text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-600 focus:ring-2 focus:ring-blue-400"
              to="/signin-recruiter"
            >
              Recruiter
            </Link>
          </div>
          {/*role*/}

          <p className="mt-2 text-center text-sm text-gray-600">
            {/*sign in text*/}
            {/* <SignUpText /> */}
            {/*sign in text*/}
          </p>
        </div>
      </div>
    </div>
  );
}
