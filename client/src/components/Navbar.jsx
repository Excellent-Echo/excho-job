import { Fragment } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../redux/user/login/userLoginAction";

// headless ui
import { Popover, Transition } from "@headlessui/react";

// heroicons
import {
  MenuIcon,
  XIcon,
  LogoutIcon,
  CogIcon,
  UserIcon,
} from "@heroicons/react/outline";

// components
import ExchoJobIconName from "./ExchoJobIconName";
import SignInText from "./SignInText";

const profile = [
  {
    name: "Dashboard",
    to: "#",
    icon: UserIcon,
  },
  {
    name: "Setting",
    to: "#",
    icon: CogIcon,
  },
];

export default function Navbar() {
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
    <>
      {!localStorage.getItem("accessToken") ? (
        // container
        <Popover className="relative sticky top-0 bg-white">
          {({ open }) => (
            <>
              {/*big screen version*/}
              <div className="mx-auto px-4 max-w-7xl sm:px-6">
                <div className="flex items-center justify-between py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10">
                  {/*icon*/}
                  <div className="flex lg:flex-1 lg:w-0">
                    <div className="flex items-center md:flex-1 lg:w-0">
                      <ExchoJobIconName />
                    </div>
                  </div>
                  {/*icon*/}

                  {/*open menu button*/}
                  <div className="-mr-2 -my-2 md:hidden">
                    <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:ring-2 focus:ring-inset">
                      <span className="sr-only">Open menu</span>
                      <MenuIcon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                  {/*open menu button*/}

                  {/*sign up & in button*/}
                  <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                    <Link
                      className="text-gray-500 hover:text-gray-900 whitespace-nowrap text-base font-medium"
                      to="/signin"
                    >
                      Sign in
                    </Link>
                    <Link
                      className="inline-flex items-center justify-center ml-8 px-4 py-2 text-white whitespace-nowrap text-base font-medium bg-indigo-600 hover:bg-indigo-700 border border-transparent rounded-xl shadow-sm"
                      to="/signup"
                    >
                      Sign up
                    </Link>
                  </div>
                  {/*sign up & in button*/}
                </div>
              </div>
              {/*big screen version*/}

              {/*small screen version*/}
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
                  {/*popover container*/}
                  <div className="bg-white rounded-lg shadow-lg divide-gray-50 divide-y-2 ring-black ring-opacity-5 ring-1">
                    {/*popover top*/}
                    <div className="pb-6 pt-5 px-5">
                      <div className="flex items-center justify-between">
                        {/*icon*/}
                        <ExchoJobIconName />
                        {/*icon*/}

                        {/*close menu button*/}
                        <div className="-mr-2">
                          <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:ring-2 focus:ring-inset">
                            <span className="sr-only">Close menu</span>
                            <XIcon className="w-6 h-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                        {/*close menu button*/}
                      </div>
                    </div>
                    {/*popover top*/}

                    {/*popover bottom*/}
                    <div className="px-5 py-6 space-y-6">
                      <Link
                        className="flex items-center justify-center mb-5 px-4 py-2 w-full text-white text-base font-medium bg-indigo-600 hover:bg-indigo-700 border border-transparent rounded-md shadow-sm"
                        to="/signup"
                      >
                        Sign up
                      </Link>

                      <SignInText />
                    </div>
                    {/*popover bottom*/}
                  </div>
                  {/*popover container*/}
                </Popover.Panel>
              </Transition>
              {/*small screen version*/}
            </>
          )}
        </Popover>
      ) : (
        // container

        // container
        <Popover className="relative sticky top-0 bg-white">
          {({ open }) => (
            <>
              {/*big screen version*/}
              <div className="mx-auto px-4 max-w-7xl sm:px-6">
                <div className="flex items-center justify-between py-6 border-b-2 border-gray-100 md:space-x-10">
                  {/*icon*/}
                  <div className="flex lg:flex-1 lg:w-0">
                    <div className="flex items-center md:flex-1 lg:w-0">
                      <ExchoJobIconName />
                    </div>
                  </div>
                  {/*icon*/}

                  {/*open menu button*/}
                  <div className="-mr-2 -my-2 md:hidden">
                    <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:ring-2 focus:ring-inset">
                      <img
                        className="w-8 h-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Popover.Button>
                  </div>
                  {/*open menu button*/}

                  {/*profile button*/}
                  <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                    <Popover className="relative">
                      {({ open }) => (
                        <>
                          {/*close menu button*/}
                          <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:ring-2 focus:ring-inset">
                            <img
                              className="w-8 h-8 rounded-full"
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                            />
                          </Popover.Button>
                          {/*close menu button*/}

                          {/*profile button*/}
                          <Transition
                            show={open}
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Popover.Panel
                              static
                              className="absolute z-10 -ml-4 mt-3 px-2 w-max transform -translate-x-1/2 sm:px-0"
                            >
                              <div className="rounded-lg shadow-lg overflow-hidden ring-black ring-opacity-5 ring-1">
                                <div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                                  {profile.map((item) => (
                                    <Link
                                      className="flex items-start -m-3 p-3 hover:text-white hover:bg-gray-100 rounded-lg"
                                      to={item.to}
                                    >
                                      <item.icon
                                        className="flex-shrink-0 mr-2 w-6 h-6 text-indigo-600"
                                        aria-hidden="true"
                                      />
                                      <p className="text-gray-900 text-base font-medium">
                                        {item.name}
                                      </p>
                                    </Link>
                                  ))}

                                  {/*sign out*/}
                                  <Link
                                    onClick={() => logoutSuccess()}
                                    className="flex items-start -m-3 p-3 hover:bg-gray-100 hover:bg-gray-50 rounded-lg"
                                  >
                                    <LogoutIcon className="flex-shrink-0 mr-2 w-6 h-6 text-indigo-600" />{" "}
                                    <p className="text-gray-900 text-base font-medium">
                                      Sign out
                                    </p>
                                  </Link>
                                  {/*sign out*/}
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                          {/*profile button*/}
                        </>
                      )}
                    </Popover>
                  </Popover.Group>

                  {/*profile button*/}
                </div>
              </div>
              {/*big screen version*/}

              {/*small screen version*/}
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
                  {/*popover container*/}
                  <div className="bg-white rounded-lg shadow-lg divide-gray-50 divide-y-2 ring-black ring-opacity-5 ring-1">
                    {/*popover top*/}
                    <div className="pb-6 pt-5 px-5">
                      <div className="flex items-center justify-between">
                        {/*icon*/}
                        <ExchoJobIconName />
                        {/*icon*/}

                        {/*close menu button*/}
                        <div className="-mr-2">
                          <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:ring-2 focus:ring-inset">
                            <img
                              className="w-8 h-8 rounded-full"
                              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                              alt=""
                            />
                          </Popover.Button>
                        </div>
                        {/*close menu button*/}
                      </div>
                    </div>
                    {/*popover top*/}

                    {/*popover bottom*/}
                    <div className="px-5 py-6 space-y-6">
                      <Link
                        className="flex items-center justify-center mb-5 px-4 py-2 w-full text-gray-900 text-base font-medium hover:bg-gray-100 border border-transparent rounded-md shadow-sm"
                        onClick={() => logoutSuccess()}
                      >
                        <LogoutIcon className="flex-shrink-0 mr-2 w-6 h-6 text-indigo-600" />
                        Sign out
                      </Link>
                    </div>
                    {/*popover bottom*/}
                  </div>
                  {/*popover container*/}
                </Popover.Panel>
              </Transition>
              {/*small screen version*/}
            </>
          )}
        </Popover>
        // container
      )}
    </>
  );
}