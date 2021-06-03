import React from "react";
import { Link } from "react-router-dom";

export default function SignUpText() {
  return (
    <div className="text-center text-base font-medium text-gray-500">
      Don't have an account yet?
      <Link
        className="text-indigo-600 hover:text-blue-600 ml-2 hover:underline"
        to="/signup"
      >
        Sign up
      </Link>
    </div>
  );
}