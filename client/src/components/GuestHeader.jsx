import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function GuestHeader() {
  return (
    <Popover className="relative bg-white sticky top-0">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a className="flex items-center md:flex-1 lg:w-0" href="/#">
                  <img
                    className="h-8 w-auto sm:h-10"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTguNzg3IDUwMy4yMTNjMTEuNzE2IDExLjcxNiAzMC43MTEgMTEuNzE2IDQyLjQyNiAwbDQyLjg1NS00Mi44NTVjNS44NTgtNS44NTggNS44NTgtMTUuMzU1IDAtMjEuMjEzbC0yMS4yMTMtMjEuMjEzYy01Ljg1OC01Ljg1OC0xNS4zNTUtNS44NTgtMjEuMjEzIDBsLTQyLjg1NSA0Mi44NTVjLTExLjcxNiAxMS43MTYtMTEuNzE2IDMwLjcxIDAgNDIuNDI2eiIgZmlsbD0iI2JlZWJmYSIgZGF0YS1vcmlnaW5hbD0iI2JlZWJmYSIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im05NC4wNjggNDYwLjM1OGM1Ljg1OC01Ljg1OCA1Ljg1OC0xNS4zNTUgMC0yMS4yMTNsLTEwLjYwNy0xMC42MDctNzQuNjc0IDc0LjY3NWMxMS43MTYgMTEuNzE2IDMwLjcxMSAxMS43MTYgNDIuNDI2IDB6IiBmaWxsPSIjOWVlMmY4IiBkYXRhLW9yaWdpbmFsPSIjOWVlMmY4IiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTEyNC41MjUgMzE4LjA3MWgxMDguODA4djMwaC0xMDguODA4eiIgZmlsbD0iIzllZTJmOCIgdHJhbnNmb3JtPSJtYXRyaXgoLjcwNyAtLjcwNyAuNzA3IC43MDcgLTE4My4xMSAyMjQuMDc2KSIgZGF0YS1vcmlnaW5hbD0iIzllZTJmOCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0xMjkuODI4IDMzMC44NzRoMTA4LjgwOHYxNWgtMTA4LjgwOHoiIGZpbGw9IiM4N2MwZWQiIHRyYW5zZm9ybT0ibWF0cml4KC43MDcgLS43MDcgLjcwNyAuNzA3IC0xODUuMzA2IDIyOS4zOCkiIGRhdGEtb3JpZ2luYWw9IiM4N2MwZWQiIHN0eWxlPSIiPjwvcGF0aD48Y2lyY2xlIGN4PSIzMjciIGN5PSIxODUiIGZpbGw9IiM5OTlmZWQiIHI9IjE3MCIgZGF0YS1vcmlnaW5hbD0iIzk5OWZlZCIgc3R5bGU9IiI+PC9jaXJjbGU+PHBhdGggZD0ibTMyNyAzNTVjOTMuODg4IDAgMTcwLTc2LjExMiAxNzAtMTcwIDAtNDYuOTQ0LTE5LjAyOC04OS40NDQtNDkuNzkyLTEyMC4yMDhsLTI0MC40MTYgMjQwLjQxNmMzMC43NjQgMzAuNzY0IDczLjI2NCA0OS43OTIgMTIwLjIwOCA0OS43OTJ6IiBmaWxsPSIjN2M4NGU4IiBkYXRhLW9yaWdpbmFsPSIjN2M4NGU4IiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTMyNyAzNzBjLTEwMi4wMDkgMC0xODUtODIuOTkxLTE4NS0xODVzODIuOTkxLTE4NSAxODUtMTg1IDE4NSA4Mi45OTEgMTg1IDE4NS04Mi45OTEgMTg1LTE4NSAxODV6bTAtMzQwYy04NS40NjcgMC0xNTUgNjkuNTMzLTE1NSAxNTVzNjkuNTMzIDE1NSAxNTUgMTU1IDE1NS02OS41MzMgMTU1LTE1NS02OS41MzMtMTU1LTE1NS0xNTV6IiBmaWxsPSIjYmVlYmZhIiBkYXRhLW9yaWdpbmFsPSIjYmVlYmZhIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTQzNi41NSA3NS40NWMyOC4wNjcgMjguMDY2IDQ1LjQ1IDY2LjgxNiA0NS40NSAxMDkuNTUgMCA4NS40NjctNjkuNTMzIDE1NS0xNTUgMTU1LTQyLjczNCAwLTgxLjQ4NC0xNy4zODMtMTA5LjU1LTQ1LjQ1bC0yMS4yMDMgMjEuMjAzYzMzLjQ5OCAzMy40OTkgNzkuNzQ4IDU0LjI0NyAxMzAuNzUzIDU0LjI0NyAxMDIuMDA5IDAgMTg1LTgyLjk5MSAxODUtMTg1IDAtNTEuMDA1LTIwLjc0OC05Ny4yNTUtNTQuMjQ3LTEzMC43NTN6IiBmaWxsPSIjOWVlMmY4IiBkYXRhLW9yaWdpbmFsPSIjOWVlMmY4IiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTE2MS42NzMgMzcxLjU0MS0yMS4yMTMtMjEuMjEzYy01Ljg1OC01Ljg1OC0xNS4zNTUtNS44NTgtMjEuMjEzIDBsLTY3LjYwNCA2Ny42MDQgNDIuNDI2IDQyLjQyNiA2Ny42MDQtNjcuNjA0YzUuODU4LTUuODU4IDUuODU4LTE1LjM1NiAwLTIxLjIxM3oiIGZpbGw9IiNmZjlmMjIiIGRhdGEtb3JpZ2luYWw9IiNmZjlmMjIiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtOTQuMDY5IDQ2MC4zNTggNjcuNjA0LTY3LjYwNGM1Ljg1OC01Ljg1OCA1Ljg1OC0xNS4zNTUgMC0yMS4yMTNsLTEwLjYwNy0xMC42MDctNzguMjExIDc4LjIxMXoiIGZpbGw9IiNmZjdjNDgiIGRhdGEtb3JpZ2luYWw9IiNmZjdjNDgiIHN0eWxlPSIiPjwvcGF0aD48Zz48Zz48Zz48cGF0aCBkPSJtNDA3IDI4MGgtMTYwYy04LjI4NCAwLTE1LTYuNzE2LTE1LTE1di04Ljc4OWMwLTUyLjMwMiA0MS43NjMtOTUuNyA5NC4wNjMtOTYuMjA3IDUyLjgxMS0uNTExIDk1LjkzNyA0Mi4zMDEgOTUuOTM3IDk0Ljk5NnYxMGMwIDguMjg0LTYuNzE2IDE1LTE1IDE1eiIgZmlsbD0iIzVmNTVhZiIgZGF0YS1vcmlnaW5hbD0iIzVmNTVhZiIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0zMjcgMTYwLjAwN3YxMTkuOTkzaDgwYzguMjg0IDAgMTUtNi43MTYgMTUtMTV2LTEwYzAtNTIuMzgzLTQyLjYxNy05NC45OTItOTUtOTQuOTkzeiIgZmlsbD0iIzQ1M2Q4MyIgZGF0YS1vcmlnaW5hbD0iIzQ1M2Q4MyIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0zMjcgMTg1Yy0zMS43MDUgMC01Ny41LTI1Ljc5NS01Ny41LTU3LjVzMjUuNzk1LTU3LjUgNTcuNS01Ny41IDU3LjUgMjUuNzk1IDU3LjUgNTcuNS0yNS43OTQgNTcuNS01Ny41IDU3LjV6IiBmaWxsPSIjZmZlNGMyIiBkYXRhLW9yaWdpbmFsPSIjZmZlNGMyIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTMyNyA3MHYxMTVjMzEuNzA2IDAgNTcuNS0yNS43OTQgNTcuNS01Ny41cy0yNS43OTQtNTcuNS01Ny41LTU3LjV6IiBmaWxsPSIjZjJkMWE1IiBkYXRhLW9yaWdpbmFsPSIjZjJkMWE1IiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvZz48L2c+PC9nPjwvZz48L3N2Zz4="
                    alt="Excho Job's Icon"
                  />
                  <span className="ml-4 text-2xl whitespace-nowrap text-base font-medium text-gray-900">
                    Excho Job
                  </span>
                </a>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>

              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <Link to="/signin">
                  <a
                    href="/#"
                    className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Sign in
                  </a>
                </Link>
                <Link to="/signup-jobseeker">
                  <a
                    href="/#"
                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-xl shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Sign up
                  </a>
                </Link>

                <a
                  href="/#"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border rounded-xl shadow-sm text-base font-medium text-indigo-600 shadow focus:shadow-inner"
                >
                  <Link to="/signup-recruiter">For Company</Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
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
                    <a className="flex items-center md:flex-1 lg:w-0" href="/#">
                      <img
                        className="h-8 w-auto"
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTguNzg3IDUwMy4yMTNjMTEuNzE2IDExLjcxNiAzMC43MTEgMTEuNzE2IDQyLjQyNiAwbDQyLjg1NS00Mi44NTVjNS44NTgtNS44NTggNS44NTgtMTUuMzU1IDAtMjEuMjEzbC0yMS4yMTMtMjEuMjEzYy01Ljg1OC01Ljg1OC0xNS4zNTUtNS44NTgtMjEuMjEzIDBsLTQyLjg1NSA0Mi44NTVjLTExLjcxNiAxMS43MTYtMTEuNzE2IDMwLjcxIDAgNDIuNDI2eiIgZmlsbD0iI2JlZWJmYSIgZGF0YS1vcmlnaW5hbD0iI2JlZWJmYSIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im05NC4wNjggNDYwLjM1OGM1Ljg1OC01Ljg1OCA1Ljg1OC0xNS4zNTUgMC0yMS4yMTNsLTEwLjYwNy0xMC42MDctNzQuNjc0IDc0LjY3NWMxMS43MTYgMTEuNzE2IDMwLjcxMSAxMS43MTYgNDIuNDI2IDB6IiBmaWxsPSIjOWVlMmY4IiBkYXRhLW9yaWdpbmFsPSIjOWVlMmY4IiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTEyNC41MjUgMzE4LjA3MWgxMDguODA4djMwaC0xMDguODA4eiIgZmlsbD0iIzllZTJmOCIgdHJhbnNmb3JtPSJtYXRyaXgoLjcwNyAtLjcwNyAuNzA3IC43MDcgLTE4My4xMSAyMjQuMDc2KSIgZGF0YS1vcmlnaW5hbD0iIzllZTJmOCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0xMjkuODI4IDMzMC44NzRoMTA4LjgwOHYxNWgtMTA4LjgwOHoiIGZpbGw9IiM4N2MwZWQiIHRyYW5zZm9ybT0ibWF0cml4KC43MDcgLS43MDcgLjcwNyAuNzA3IC0xODUuMzA2IDIyOS4zOCkiIGRhdGEtb3JpZ2luYWw9IiM4N2MwZWQiIHN0eWxlPSIiPjwvcGF0aD48Y2lyY2xlIGN4PSIzMjciIGN5PSIxODUiIGZpbGw9IiM5OTlmZWQiIHI9IjE3MCIgZGF0YS1vcmlnaW5hbD0iIzk5OWZlZCIgc3R5bGU9IiI+PC9jaXJjbGU+PHBhdGggZD0ibTMyNyAzNTVjOTMuODg4IDAgMTcwLTc2LjExMiAxNzAtMTcwIDAtNDYuOTQ0LTE5LjAyOC04OS40NDQtNDkuNzkyLTEyMC4yMDhsLTI0MC40MTYgMjQwLjQxNmMzMC43NjQgMzAuNzY0IDczLjI2NCA0OS43OTIgMTIwLjIwOCA0OS43OTJ6IiBmaWxsPSIjN2M4NGU4IiBkYXRhLW9yaWdpbmFsPSIjN2M4NGU4IiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTMyNyAzNzBjLTEwMi4wMDkgMC0xODUtODIuOTkxLTE4NS0xODVzODIuOTkxLTE4NSAxODUtMTg1IDE4NSA4Mi45OTEgMTg1IDE4NS04Mi45OTEgMTg1LTE4NSAxODV6bTAtMzQwYy04NS40NjcgMC0xNTUgNjkuNTMzLTE1NSAxNTVzNjkuNTMzIDE1NSAxNTUgMTU1IDE1NS02OS41MzMgMTU1LTE1NS02OS41MzMtMTU1LTE1NS0xNTV6IiBmaWxsPSIjYmVlYmZhIiBkYXRhLW9yaWdpbmFsPSIjYmVlYmZhIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTQzNi41NSA3NS40NWMyOC4wNjcgMjguMDY2IDQ1LjQ1IDY2LjgxNiA0NS40NSAxMDkuNTUgMCA4NS40NjctNjkuNTMzIDE1NS0xNTUgMTU1LTQyLjczNCAwLTgxLjQ4NC0xNy4zODMtMTA5LjU1LTQ1LjQ1bC0yMS4yMDMgMjEuMjAzYzMzLjQ5OCAzMy40OTkgNzkuNzQ4IDU0LjI0NyAxMzAuNzUzIDU0LjI0NyAxMDIuMDA5IDAgMTg1LTgyLjk5MSAxODUtMTg1IDAtNTEuMDA1LTIwLjc0OC05Ny4yNTUtNTQuMjQ3LTEzMC43NTN6IiBmaWxsPSIjOWVlMmY4IiBkYXRhLW9yaWdpbmFsPSIjOWVlMmY4IiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTE2MS42NzMgMzcxLjU0MS0yMS4yMTMtMjEuMjEzYy01Ljg1OC01Ljg1OC0xNS4zNTUtNS44NTgtMjEuMjEzIDBsLTY3LjYwNCA2Ny42MDQgNDIuNDI2IDQyLjQyNiA2Ny42MDQtNjcuNjA0YzUuODU4LTUuODU4IDUuODU4LTE1LjM1NiAwLTIxLjIxM3oiIGZpbGw9IiNmZjlmMjIiIGRhdGEtb3JpZ2luYWw9IiNmZjlmMjIiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtOTQuMDY5IDQ2MC4zNTggNjcuNjA0LTY3LjYwNGM1Ljg1OC01Ljg1OCA1Ljg1OC0xNS4zNTUgMC0yMS4yMTNsLTEwLjYwNy0xMC42MDctNzguMjExIDc4LjIxMXoiIGZpbGw9IiNmZjdjNDgiIGRhdGEtb3JpZ2luYWw9IiNmZjdjNDgiIHN0eWxlPSIiPjwvcGF0aD48Zz48Zz48Zz48cGF0aCBkPSJtNDA3IDI4MGgtMTYwYy04LjI4NCAwLTE1LTYuNzE2LTE1LTE1di04Ljc4OWMwLTUyLjMwMiA0MS43NjMtOTUuNyA5NC4wNjMtOTYuMjA3IDUyLjgxMS0uNTExIDk1LjkzNyA0Mi4zMDEgOTUuOTM3IDk0Ljk5NnYxMGMwIDguMjg0LTYuNzE2IDE1LTE1IDE1eiIgZmlsbD0iIzVmNTVhZiIgZGF0YS1vcmlnaW5hbD0iIzVmNTVhZiIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0zMjcgMTYwLjAwN3YxMTkuOTkzaDgwYzguMjg0IDAgMTUtNi43MTYgMTUtMTV2LTEwYzAtNTIuMzgzLTQyLjYxNy05NC45OTItOTUtOTQuOTkzeiIgZmlsbD0iIzQ1M2Q4MyIgZGF0YS1vcmlnaW5hbD0iIzQ1M2Q4MyIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0zMjcgMTg1Yy0zMS43MDUgMC01Ny41LTI1Ljc5NS01Ny41LTU3LjVzMjUuNzk1LTU3LjUgNTcuNS01Ny41IDU3LjUgMjUuNzk1IDU3LjUgNTcuNS0yNS43OTQgNTcuNS01Ny41IDU3LjV6IiBmaWxsPSIjZmZlNGMyIiBkYXRhLW9yaWdpbmFsPSIjZmZlNGMyIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTMyNyA3MHYxMTVjMzEuNzA2IDAgNTcuNS0yNS43OTQgNTcuNS01Ny41cy0yNS43OTQtNTcuNS01Ny41LTU3LjV6IiBmaWxsPSIjZjJkMWE1IiBkYXRhLW9yaWdpbmFsPSIjZjJkMWE1IiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvZz48L2c+PC9nPjwvZz48L3N2Zz4="
                        alt="Excho Job's Icon"
                      />
                      <span className="ml-4 text-2xl whitespace-nowrap text-base font-medium text-gray-900">
                        Excho Job
                      </span>
                    </a>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  <div>
                    <a
                      href="/#"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      Sign up
                    </a>
                    <a
                      href="/#"
                      className="w-full mt-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border rounded-md shadow-sm text-base font-medium text-indigo-600"
                    >
                      For Company
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </a>
                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                      Existing customer?{" "}
                      <a
                        href="/#"
                        className="text-indigo-600 hover:text-indigo-500"
                      >
                        Sign in
                      </a>
                    </p>
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
