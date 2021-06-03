import React from "react";
import { Link } from "react-router-dom";

export default function SignInText() {
  return (
    <div className="text-center text-base font-medium text-gray-500">
      Already have an account?
      <Link
        className="text-indigo-600 hover:text-blue-600 ml-2 hover:underline"
        to="/signin"
      >
        Sign in
      </Link>
    </div>
  );
}