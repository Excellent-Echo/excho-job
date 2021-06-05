import { Link } from "react-router-dom";
import React from "react";

export default function SignUpText() {
  return (
    <div className="text-center text-gray-500 text-base font-medium">
      Don't have an account yet?
      <Link
        className="ml-2 hover:text-blue-500 text-indigo-600 hover:underline"
        to="/signup"
      >
        Sign up
      </Link>
    </div>
  );
}