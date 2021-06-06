import { Link } from "react-router-dom";
import React from "react";

export default function SignInText() {
  return (
    <div className="text-center text-gray-500 text-base font-medium">
      Already have an account?
      <Link
        className="ml-2 hover:text-blue-500 text-indigo-600 hover:underline"
        to="/signin"
      >
        Sign in
      </Link>
    </div>
  );
}