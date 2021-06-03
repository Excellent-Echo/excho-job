import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import ExchoJobIconName from "./ExchoJobIconName";
import CloseButtonPopover from "./CloseButtonPopover";
import OpenMenuButton from "./OpenMenuButton";
import SignInText from "./SignInText";

export default function GuestHeader() {
  return (
    <Popover className="relative bg-white sticky top-0">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                {/*logo*/}
                <ExchoJobIconName />
                {/*logo*/}
              </div>

              {/*open menu*/}
              <OpenMenuButton />
              {/*open menu*/}

              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                {/*sign in*/}
                <Link
                  className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                  to="/signin"
                >
                  Sign in
                </Link>
                {/*sign in*/}

                {/*sign up*/}
                <Link
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-xl shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  to="/signup"
                >
                  Sign up
                </Link>
                {/*sign up*/}
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
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    {/*logo*/}
                    <Link className="flex items-center md:flex-1 lg:w-0" to="/">
                      <ExchoJobIconName />
                    </Link>
                    {/*logo*/}

                    {/*close button*/}
                    <CloseButtonPopover />
                    {/*close button*/}
                  </div>
                </div>

                <div className="py-6 px-5 space-y-6">
                  <div>
                    {/*sign up*/}
                    <Link
                      to="/signup"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 mb-5"
                    >
                      Sign up
                    </Link>
                    {/*sign up*/}

                    {/*sign in text*/}
                    <SignInText />
                    {/*sign in text*/}
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