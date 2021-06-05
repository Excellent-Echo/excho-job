import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { userLogout } from "../redux/user/login/userLoginAction";
import ExchoJobIconName from "./ExchoJobIconName";
import SignInText from "./SignInText";

export default function Header() {
  const dataUser = useSelector((state) => state.userLogin);
  console.log("data user", dataUser);

  const dispatch = useDispatch();
  const history = useHistory();

  const logoutSuccess = () => {
    console.log("logout");
    dispatch(userLogout(history));
    localStorage.removeItem("accessToken");

    alert("logout");
    console.log("slesai logoout", dataUser);
  };

  return (
    <Popover className="relative sticky top-0 bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto px-4 max-w-7xl sm:px-6">
            <div className="flex items-center justify-between py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10">
              <div className="flex lg:flex-1 lg:w-0">
                <div className="flex items-center md:flex-1 lg:w-0">
                  <ExchoJobIconName />
                </div>
              </div>

              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:ring-2 focus:ring-inset">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="w-6 h-6" aria-hidden="true" />
                </Popover.Button>
              </div>

              <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                {!localStorage.getItem("accessToken") ? (
                  <>
                    <Link to="/signin">
                      <span className="text-gray-500 hover:text-gray-900 whitespace-nowrap text-base font-medium">
                        Sign in
                      </span>
                    </Link>
                    <Link to="/signup">
                      <span className="inline-flex items-center justify-center ml-8 px-4 py-2 text-white whitespace-nowrap text-base font-medium bg-indigo-600 hover:bg-indigo-700 border border-transparent rounded-xl shadow-sm">
                        Sign up
                      </span>
                    </Link>
                  </>
                ) : (
                  <span
                    onClick={() => logoutSuccess()}
                    className="inline-flex items-center justify-center ml-8 px-4 py-2 text-white whitespace-nowrap text-base font-medium bg-indigo-600 hover:bg-indigo-700 border border-transparent rounded-xl shadow-sm cursor-pointer"
                  >
                    Sign out
                  </span>
                )}
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute inset-x-0 top-0 p-2 transform origin-top-right transition md:hidden"
            >
              <div className="bg-white rounded-lg shadow-lg divide-gray-50 divide-y-2 ring-black ring-opacity-5 ring-1">
                <div className="pb-6 pt-5 px-5">
                  <div className="flex items-center justify-between">
                    <ExchoJobIconName />
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:ring-2 focus:ring-inset">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="w-6 h-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="px-5 py-6 space-y-6">
                  <div>
                    <Link
                      className="flex items-center justify-center mb-5 px-4 py-2 w-full text-white text-base font-medium bg-indigo-600 hover:bg-indigo-700 border border-transparent rounded-md shadow-sm"
                      to="/signup"
                    >
                      Sign up
                    </Link>
                    <SignInText />
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}