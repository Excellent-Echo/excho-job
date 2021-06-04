import React from "react";
import { Link } from "react-router-dom";
import ExchoJobIcon from "../components/ExchoJobIcon";
import SignInText from "../components/SignInText";

export default function SignUpRolePage() {
  return (
    <div className="flex items-center justify-center px-4 py-12 min-h-screen bg-gray-50 select-none sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <ExchoJobIcon />
          <h2 className="mb-4 mt-6 text-center text-gray-900 text-3xl font-extrabold">
            <span className="text-yellow-500">Sign up</span> to your account as
          </h2>

          {/*role*/}
          <div className="flex my-8">
            <Link
              className="flex justify-center mx-4 px-6 py-4 w-full text-white text-sm font-medium bg-blue-700 hover:bg-blue-800 border border-transparent rounded-md focus:outline-none focus:ring-blue-500 focus:ring-offset-2 focus:ring-2"
              to="/signup-jobseeker"
            >
              Job Seeker
            </Link>
            <Link
              className="flex justify-center mx-4 px-6 py-4 w-full text-white text-sm font-medium bg-blue-700 hover:bg-blue-800 border border-transparent rounded-md focus:outline-none focus:ring-blue-500 focus:ring-offset-2 focus:ring-2"
              to="/signup-recruiter"
            >
              Recruiter
            </Link>
          </div>
          {/*role*/}

          <p className="mt-2 text-center text-gray-600 text-sm">
            Or
            <SignInText />
          </p>
        </div>
      </div>
    </div>
  );
}