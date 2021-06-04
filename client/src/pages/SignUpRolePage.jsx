import React from "react";
import { Link } from "react-router-dom";

export default function SignUpRolePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 mb-4">
            <span className="text-yellow-500">Sign up</span> to your account as
          </h2>

          {/*role*/}
          <div className="flex">
            <Link
              className="flex-1 p-8 text-xl m-4 bg-white flex justify-center rounded-xl font-medium border-2 border-blue-600 text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-600 focus:ring-2 focus:ring-blue-400"
              to="/signup-jobseeker"
            >
              Job Seeker
            </Link>
            <Link
              className="flex-1 p-8 text-xl m-4 bg-white flex justify-center rounded-xl font-medium border-2 border-blue-600 text-blue-500 hover:text-white hover:bg-blue-500 hover:border-blue-600 focus:ring-2 focus:ring-blue-400"
              to="/signup-recruiter"
            >
              Recruiter
            </Link>
          </div>
          {/*role*/}

          <p className="mt-2 text-center text-sm text-gray-600"></p>
        </div>
      </div>
    </div>
  );
}