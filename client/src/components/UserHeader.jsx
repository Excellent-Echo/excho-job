import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

const profile = ["Your Profile", "Settings", "Sign out"];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function UserHeader() {
  return (
    <div className="sticky top-0">
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-8 w-8"
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTguNzg3IDUwMy4yMTNjMTEuNzE2IDExLjcxNiAzMC43MTEgMTEuNzE2IDQyLjQyNiAwbDQyLjg1NS00Mi44NTVjNS44NTgtNS44NTggNS44NTgtMTUuMzU1IDAtMjEuMjEzbC0yMS4yMTMtMjEuMjEzYy01Ljg1OC01Ljg1OC0xNS4zNTUtNS44NTgtMjEuMjEzIDBsLTQyLjg1NSA0Mi44NTVjLTExLjcxNiAxMS43MTYtMTEuNzE2IDMwLjcxIDAgNDIuNDI2eiIgZmlsbD0iI2JlZWJmYSIgZGF0YS1vcmlnaW5hbD0iI2JlZWJmYSIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im05NC4wNjggNDYwLjM1OGM1Ljg1OC01Ljg1OCA1Ljg1OC0xNS4zNTUgMC0yMS4yMTNsLTEwLjYwNy0xMC42MDctNzQuNjc0IDc0LjY3NWMxMS43MTYgMTEuNzE2IDMwLjcxMSAxMS43MTYgNDIuNDI2IDB6IiBmaWxsPSIjOWVlMmY4IiBkYXRhLW9yaWdpbmFsPSIjOWVlMmY4IiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTEyNC41MjUgMzE4LjA3MWgxMDguODA4djMwaC0xMDguODA4eiIgZmlsbD0iIzllZTJmOCIgdHJhbnNmb3JtPSJtYXRyaXgoLjcwNyAtLjcwNyAuNzA3IC43MDcgLTE4My4xMSAyMjQuMDc2KSIgZGF0YS1vcmlnaW5hbD0iIzllZTJmOCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0xMjkuODI4IDMzMC44NzRoMTA4LjgwOHYxNWgtMTA4LjgwOHoiIGZpbGw9IiM4N2MwZWQiIHRyYW5zZm9ybT0ibWF0cml4KC43MDcgLS43MDcgLjcwNyAuNzA3IC0xODUuMzA2IDIyOS4zOCkiIGRhdGEtb3JpZ2luYWw9IiM4N2MwZWQiIHN0eWxlPSIiPjwvcGF0aD48Y2lyY2xlIGN4PSIzMjciIGN5PSIxODUiIGZpbGw9IiM5OTlmZWQiIHI9IjE3MCIgZGF0YS1vcmlnaW5hbD0iIzk5OWZlZCIgc3R5bGU9IiI+PC9jaXJjbGU+PHBhdGggZD0ibTMyNyAzNTVjOTMuODg4IDAgMTcwLTc2LjExMiAxNzAtMTcwIDAtNDYuOTQ0LTE5LjAyOC04OS40NDQtNDkuNzkyLTEyMC4yMDhsLTI0MC40MTYgMjQwLjQxNmMzMC43NjQgMzAuNzY0IDczLjI2NCA0OS43OTIgMTIwLjIwOCA0OS43OTJ6IiBmaWxsPSIjN2M4NGU4IiBkYXRhLW9yaWdpbmFsPSIjN2M4NGU4IiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTMyNyAzNzBjLTEwMi4wMDkgMC0xODUtODIuOTkxLTE4NS0xODVzODIuOTkxLTE4NSAxODUtMTg1IDE4NSA4Mi45OTEgMTg1IDE4NS04Mi45OTEgMTg1LTE4NSAxODV6bTAtMzQwYy04NS40NjcgMC0xNTUgNjkuNTMzLTE1NSAxNTVzNjkuNTMzIDE1NSAxNTUgMTU1IDE1NS02OS41MzMgMTU1LTE1NS02OS41MzMtMTU1LTE1NS0xNTV6IiBmaWxsPSIjYmVlYmZhIiBkYXRhLW9yaWdpbmFsPSIjYmVlYmZhIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTQzNi41NSA3NS40NWMyOC4wNjcgMjguMDY2IDQ1LjQ1IDY2LjgxNiA0NS40NSAxMDkuNTUgMCA4NS40NjctNjkuNTMzIDE1NS0xNTUgMTU1LTQyLjczNCAwLTgxLjQ4NC0xNy4zODMtMTA5LjU1LTQ1LjQ1bC0yMS4yMDMgMjEuMjAzYzMzLjQ5OCAzMy40OTkgNzkuNzQ4IDU0LjI0NyAxMzAuNzUzIDU0LjI0NyAxMDIuMDA5IDAgMTg1LTgyLjk5MSAxODUtMTg1IDAtNTEuMDA1LTIwLjc0OC05Ny4yNTUtNTQuMjQ3LTEzMC43NTN6IiBmaWxsPSIjOWVlMmY4IiBkYXRhLW9yaWdpbmFsPSIjOWVlMmY4IiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTE2MS42NzMgMzcxLjU0MS0yMS4yMTMtMjEuMjEzYy01Ljg1OC01Ljg1OC0xNS4zNTUtNS44NTgtMjEuMjEzIDBsLTY3LjYwNCA2Ny42MDQgNDIuNDI2IDQyLjQyNiA2Ny42MDQtNjcuNjA0YzUuODU4LTUuODU4IDUuODU4LTE1LjM1NiAwLTIxLjIxM3oiIGZpbGw9IiNmZjlmMjIiIGRhdGEtb3JpZ2luYWw9IiNmZjlmMjIiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtOTQuMDY5IDQ2MC4zNTggNjcuNjA0LTY3LjYwNGM1Ljg1OC01Ljg1OCA1Ljg1OC0xNS4zNTUgMC0yMS4yMTNsLTEwLjYwNy0xMC42MDctNzguMjExIDc4LjIxMXoiIGZpbGw9IiNmZjdjNDgiIGRhdGEtb3JpZ2luYWw9IiNmZjdjNDgiIHN0eWxlPSIiPjwvcGF0aD48Zz48Zz48Zz48cGF0aCBkPSJtNDA3IDI4MGgtMTYwYy04LjI4NCAwLTE1LTYuNzE2LTE1LTE1di04Ljc4OWMwLTUyLjMwMiA0MS43NjMtOTUuNyA5NC4wNjMtOTYuMjA3IDUyLjgxMS0uNTExIDk1LjkzNyA0Mi4zMDEgOTUuOTM3IDk0Ljk5NnYxMGMwIDguMjg0LTYuNzE2IDE1LTE1IDE1eiIgZmlsbD0iIzVmNTVhZiIgZGF0YS1vcmlnaW5hbD0iIzVmNTVhZiIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0zMjcgMTYwLjAwN3YxMTkuOTkzaDgwYzguMjg0IDAgMTUtNi43MTYgMTUtMTV2LTEwYzAtNTIuMzgzLTQyLjYxNy05NC45OTItOTUtOTQuOTkzeiIgZmlsbD0iIzQ1M2Q4MyIgZGF0YS1vcmlnaW5hbD0iIzQ1M2Q4MyIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0zMjcgMTg1Yy0zMS43MDUgMC01Ny41LTI1Ljc5NS01Ny41LTU3LjVzMjUuNzk1LTU3LjUgNTcuNS01Ny41IDU3LjUgMjUuNzk1IDU3LjUgNTcuNS0yNS43OTQgNTcuNS01Ny41IDU3LjV6IiBmaWxsPSIjZmZlNGMyIiBkYXRhLW9yaWdpbmFsPSIjZmZlNGMyIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTMyNyA3MHYxMTVjMzEuNzA2IDAgNTcuNS0yNS43OTQgNTcuNS01Ny41cy0yNS43OTQtNTcuNS01Ny41LTU3LjV6IiBmaWxsPSIjZjJkMWE1IiBkYXRhLW9yaWdpbmFsPSIjZjJkMWE1IiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvZz48L2c+PC9nPjwvZz48L3N2Zz4="
                      alt="Excho Job's Icon"
                    />
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="ml-3 relative">
                      {({ open }) => (
                        <>
                          <div>
                            <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                              <span className="sr-only">Open user menu</span>
                              <img
                                className="h-8 w-8 rounded-full"
                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PGc+PGc+PGcgaWQ9IlhNTElEXzExMzhfIj48ZyBpZD0iWE1MSURfMTEzOV8iPjxnIGlkPSJYTUxJRF8xMjA5XyI+PGcgaWQ9IlhNTElEXzEyMTBfIj48ZyBpZD0iWE1MSURfMTIxMV8iPjxnIGlkPSJYTUxJRF8xMjEyXyI+PGcgaWQ9IlhNTElEXzEyMTNfIj48ZyBpZD0iWE1MSURfMTIxNF8iPjxnIGlkPSJYTUxJRF8xMjE1XyI+PGcgaWQ9IlhNTElEXzEyMTZfIj48ZyBpZD0iWE1MSURfMTIxN18iPjxnIGlkPSJYTUxJRF8xMjE4XyI+PGcgaWQ9IlhNTElEXzEyMTlfIj48ZyBpZD0iWE1MSURfMTIyMF8iPjxnPjxwYXRoIGQ9Im01MTIgMjU2YzAgNzAuMjQtMjguMyAxMzMuODctNzQuMSAxODAuMTMtMjUuNzYgMjYuMDEtMzM4LjA0IDI2LjAxLTM2My44IDAtNDUuOC00Ni4yNi03NC4xLTEwOS44OS03NC4xLTE4MC4xMyAwLTE0MS4zOCAxMTQuNjItMjU2IDI1Ni0yNTZzMjU2IDExNC42MiAyNTYgMjU2eiIgZmlsbD0iI2ZiZTI4MCIgZGF0YS1vcmlnaW5hbD0iI2ZiZTI4MCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjxwYXRoIGQ9Im01MTEuODY1IDI0Ny43NzUtMTM2Ljc3NS0xMzYuNzc1LTkwLjcxNi41NDEtMTIyLjM4OCAxMDUuMTk3IDIzMS43MzIgMjMxLjczMmMyMi45MjEtMy4xMDUgMzkuMTA5LTcuMjE4IDQ0LjE4Mi0xMi4zNCA0NS44LTQ2LjI2IDc0LjEtMTA5Ljg5IDc0LjEtMTgwLjEzIDAtMi43NTItLjA0OS01LjQ5My0uMTM1LTguMjI1eiIgZmlsbD0iI2VmYzg1OSIgZGF0YS1vcmlnaW5hbD0iI2VmYzg1OSIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0xOTkuOTcgMjUwLjIzMmgxMTIuMDZ2MTE4Ljg0aC0xMTIuMDZ6IiBmaWxsPSIjZWFhNjc4IiBkYXRhLW9yaWdpbmFsPSIjZWFhNjc4IiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTI1NiAyNTAuMjM2aDU2LjAzdjExOC44NGgtNTYuMDN6IiBmaWxsPSIjZDM4YzViIiBkYXRhLW9yaWdpbmFsPSIjZDM4YzViIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTE5OS45NyAzMzAuMDVoMTEyLjA2djExOC44NGgtMTEyLjA2eiIgZmlsbD0iI2ZmYzM5NyIgZGF0YS1vcmlnaW5hbD0iI2ZmYzM5NyIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0yNTYgMzMwLjA1aDU2LjAzdjExOC44NGgtNTYuMDN6IiBmaWxsPSIjZWFhNjc4IiBkYXRhLW9yaWdpbmFsPSIjZWFhNjc4IiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTM0NC4yNTEgMTUyLjIyNWMtMy43MjgtNTYuNi00OS41MTEtNzcuNTE3LTg4LjI1MS03Ny41MTdzLTg0LjUyMyAyMC45MTctODguMjUxIDc3LjUxN2MtMTAuMDE4IDEuOTM4LTE3LjEzNCAxNS4wNzctMTYuMDE0IDI1LjcwMWwxLjcxNyAyNC4xNzdjMS4xNzUgMTEuMTU3IDEwLjk4MiAxOS4zMDEgMjEuNzkgMTguMDg5bDEuODY0LS4yMDJjMjIuMTM5IDU5LjQ0NiA1Ni44NTcgNjUuNjQ0IDc4Ljg5NCA2OS4xMjUgMjIuMDM3LTMuNDggNTYuNzU2LTkuNjc4IDc4Ljg5NC02OS4xMjVsMS44NjQuMjAyYzEwLjgwNyAxLjIxMiAyMC42MTQtNi45MzIgMjEuNzktMTguMDg5bDEuNzE3LTI0LjE3N2MxLjEyLTEwLjYyNC01Ljk5Ni0yMy43NjMtMTYuMDE0LTI1LjcwMXoiIGZpbGw9IiNmZmMzOTciIGRhdGEtb3JpZ2luYWw9IiNmZmMzOTciIHN0eWxlPSIiPjwvcGF0aD48cGF0aCBkPSJtMzYwLjI2NSAxNzcuOTI2LTEuNzE3IDI0LjE3N2MtMS4xNzUgMTEuMTU3LTEwLjk4MiAxOS4zMDEtMjEuNzkgMTguMDg5bC0xLjg2NC0uMjAyYy03LjU2NiAyMC4yOTMtMTYuNTkyIDM0LjM4OC0yNi4wNzggNDQuMjc3LTE4LjI5MSAxOS4wODEtMzguMjk5IDIyLjU1Mi01Mi44MTcgMjQuODQ3di0yMTQuNDA2YzM4Ljc0IDAgODQuNTIzIDIwLjkxNyA4OC4yNTEgNzcuNTE3IDEwLjAxOSAxLjkzOCAxNy4xMzUgMTUuMDc3IDE2LjAxNSAyNS43MDF6IiBmaWxsPSIjZWFhNjc4IiBkYXRhLW9yaWdpbmFsPSIjZWFhNjc4IiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTM3NS4wOTMgMTExLjAwMnMtNDUuMjg1LTU0LjQwOS05Ni45MjMtNjYuNjE0Yy0yMy4zNjktNS41MjMtNTMuMzk2IDEuNTYxLTczLjQyNyAyMi43MTgtMjYuMzkzIDIuMzA4LTU3LjQ3OCAyMy40NjctMzkuNjU4IDEwNS40MjNsMjAuNzAyIDIzLjA3IDEwLjU3NC01My41MjZjMjMuMzc4IDYuNDc3IDcwLjc3IDE1LjYxIDExOC45OTMgMS4zNzhsMTAuMzAyIDUyLjE0OSAyMC43MDItMjMuMDdjMy42OTEtMTcuNDYzIDQuNzMyLTMxLjkyIDMuODU2LTQzLjkxMyA4LjQ5MS00Ljg2OSAxNi44MzEtMTAuNjggMjQuODc5LTE3LjYxNXoiIGZpbGw9IiNhZjVlMjIiIGRhdGEtb3JpZ2luYWw9IiNhZjVlMjIiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMzUwLjIxIDEyOC42MmMuODggMTEuOTktLjE2IDI2LjQ0LTMuODUgNDMuOTFsLTIwLjcgMjMuMDctMTAuMzEtNTIuMTVjLTIwLjUzIDYuMDYtNDAuOTEgNy44OC01OS4zNSA3LjQ3di0xMDguMDdjNy42OS0uNjMgMTUuMjItLjEgMjIuMTcgMS41NCA1MS42NCAxMi4yIDk2LjkyIDY2LjYxIDk2LjkyIDY2LjYxLTguMDQgNi45NC0xNi4zOCAxMi43NS0yNC44OCAxNy42MnoiIGZpbGw9IiM4OTQ5MWQiIGRhdGEtb3JpZ2luYWw9IiM4OTQ5MWQiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMzQ1LjkyIDQ5NS43NWMtMTAuOTYgNC4xMi0yMi4yOCA3LjUtMzMuODkgMTAuMDktMTguMDMgNC4wNC0zNi43OCA2LjE2LTU2LjAzIDYuMTZzLTM4LTIuMTItNTYuMDMtNi4xNmMtMTEuNjEtMi41OS0yMi45My01Ljk3LTMzLjg5LTEwLjA5bDMzLjg5LTE2NS43YzEyLjkzIDIwLjczIDM0LjQ4IDMxLjA5IDU2LjAzIDMxLjA5czQzLjEtMTAuMzYgNTYuMDMtMzEuMDl6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjZmZmZmZmIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTM0NS45MiA0OTUuNzVjLTEwLjk2IDQuMTItMjIuMjggNy41LTMzLjg5IDEwLjA5LTE4LjAzIDQuMDQtMzYuNzggNi4xNi01Ni4wMyA2LjE2di0xNTAuODZjMjEuNTUgMCA0My4xLTEwLjM2IDU2LjAzLTMxLjA5eiIgZmlsbD0iI2NlY2VjZSIgZGF0YS1vcmlnaW5hbD0iI2NlY2VjZSIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0xOTkuOTcgMzMwLjA1djE3NS43OWMtNDguNjItMTAuODUtOTIuMDMtMzUuNTQtMTI1Ljg3LTY5Ljcxdi02MS43YzAtMjQuNTEgMTkuODctNDQuMzggNDQuMzgtNDQuMzh6IiBmaWxsPSIjMzM2YjkwIiBkYXRhLW9yaWdpbmFsPSIjMzM2YjkwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTQzNy45IDM3NC40M3Y2MS43Yy0zMy44NCAzNC4xNy03Ny4yNSA1OC44Ni0xMjUuODcgNjkuNzF2LTE3NS43OWg4MS40OWMyNC41MSAwIDQ0LjM4IDE5Ljg3IDQ0LjM4IDQ0LjM4eiIgZmlsbD0iIzIwNTA3NyIgZGF0YS1vcmlnaW5hbD0iIzIwNTA3NyIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0xNTcuMzMgNDE5LjY0NXY3Mi42MjVjLTExLjE3LTQuNjYtMjEuOTUtMTAuMTEtMzIuMjUtMTYuMjV2LTU2LjM3NXoiIGZpbGw9IiMyMDUwNzciIGRhdGEtb3JpZ2luYWw9IiMyMDUwNzciIHN0eWxlPSIiPjwvcGF0aD48cGF0aCBkPSJtMzg2LjkyIDQxOS42NDV2NTYuMzc1Yy0xMC4zIDYuMTQtMjEuMDggMTEuNTktMzIuMjUgMTYuMjV2LTcyLjYyNXoiIGZpbGw9IiMxNjNjNjYiIGRhdGEtb3JpZ2luYWw9IiMxNjNjNjYiIHN0eWxlPSIiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
                                alt="User's Avatar"
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            show={open}
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items
                              static
                              className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                            >
                              {profile.map((item) => (
                                <Menu.Item key={item}>
                                  {({ active }) => (
                                    <a
                                      href="/#"
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}
                                    >
                                      {item}
                                    </a>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Transition>
                        </>
                      )}
                    </Menu>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="pt-4 pb-3 border-t border-gray-700">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PGc+PGc+PGcgaWQ9IlhNTElEXzExMzhfIj48ZyBpZD0iWE1MSURfMTEzOV8iPjxnIGlkPSJYTUxJRF8xMjA5XyI+PGcgaWQ9IlhNTElEXzEyMTBfIj48ZyBpZD0iWE1MSURfMTIxMV8iPjxnIGlkPSJYTUxJRF8xMjEyXyI+PGcgaWQ9IlhNTElEXzEyMTNfIj48ZyBpZD0iWE1MSURfMTIxNF8iPjxnIGlkPSJYTUxJRF8xMjE1XyI+PGcgaWQ9IlhNTElEXzEyMTZfIj48ZyBpZD0iWE1MSURfMTIxN18iPjxnIGlkPSJYTUxJRF8xMjE4XyI+PGcgaWQ9IlhNTElEXzEyMTlfIj48ZyBpZD0iWE1MSURfMTIyMF8iPjxnPjxwYXRoIGQ9Im01MTIgMjU2YzAgNzAuMjQtMjguMyAxMzMuODctNzQuMSAxODAuMTMtMjUuNzYgMjYuMDEtMzM4LjA0IDI2LjAxLTM2My44IDAtNDUuOC00Ni4yNi03NC4xLTEwOS44OS03NC4xLTE4MC4xMyAwLTE0MS4zOCAxMTQuNjItMjU2IDI1Ni0yNTZzMjU2IDExNC42MiAyNTYgMjU2eiIgZmlsbD0iI2ZiZTI4MCIgZGF0YS1vcmlnaW5hbD0iI2ZiZTI4MCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjxwYXRoIGQ9Im01MTEuODY1IDI0Ny43NzUtMTM2Ljc3NS0xMzYuNzc1LTkwLjcxNi41NDEtMTIyLjM4OCAxMDUuMTk3IDIzMS43MzIgMjMxLjczMmMyMi45MjEtMy4xMDUgMzkuMTA5LTcuMjE4IDQ0LjE4Mi0xMi4zNCA0NS44LTQ2LjI2IDc0LjEtMTA5Ljg5IDc0LjEtMTgwLjEzIDAtMi43NTItLjA0OS01LjQ5My0uMTM1LTguMjI1eiIgZmlsbD0iI2VmYzg1OSIgZGF0YS1vcmlnaW5hbD0iI2VmYzg1OSIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0xOTkuOTcgMjUwLjIzMmgxMTIuMDZ2MTE4Ljg0aC0xMTIuMDZ6IiBmaWxsPSIjZWFhNjc4IiBkYXRhLW9yaWdpbmFsPSIjZWFhNjc4IiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTI1NiAyNTAuMjM2aDU2LjAzdjExOC44NGgtNTYuMDN6IiBmaWxsPSIjZDM4YzViIiBkYXRhLW9yaWdpbmFsPSIjZDM4YzViIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTE5OS45NyAzMzAuMDVoMTEyLjA2djExOC44NGgtMTEyLjA2eiIgZmlsbD0iI2ZmYzM5NyIgZGF0YS1vcmlnaW5hbD0iI2ZmYzM5NyIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0yNTYgMzMwLjA1aDU2LjAzdjExOC44NGgtNTYuMDN6IiBmaWxsPSIjZWFhNjc4IiBkYXRhLW9yaWdpbmFsPSIjZWFhNjc4IiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTM0NC4yNTEgMTUyLjIyNWMtMy43MjgtNTYuNi00OS41MTEtNzcuNTE3LTg4LjI1MS03Ny41MTdzLTg0LjUyMyAyMC45MTctODguMjUxIDc3LjUxN2MtMTAuMDE4IDEuOTM4LTE3LjEzNCAxNS4wNzctMTYuMDE0IDI1LjcwMWwxLjcxNyAyNC4xNzdjMS4xNzUgMTEuMTU3IDEwLjk4MiAxOS4zMDEgMjEuNzkgMTguMDg5bDEuODY0LS4yMDJjMjIuMTM5IDU5LjQ0NiA1Ni44NTcgNjUuNjQ0IDc4Ljg5NCA2OS4xMjUgMjIuMDM3LTMuNDggNTYuNzU2LTkuNjc4IDc4Ljg5NC02OS4xMjVsMS44NjQuMjAyYzEwLjgwNyAxLjIxMiAyMC42MTQtNi45MzIgMjEuNzktMTguMDg5bDEuNzE3LTI0LjE3N2MxLjEyLTEwLjYyNC01Ljk5Ni0yMy43NjMtMTYuMDE0LTI1LjcwMXoiIGZpbGw9IiNmZmMzOTciIGRhdGEtb3JpZ2luYWw9IiNmZmMzOTciIHN0eWxlPSIiPjwvcGF0aD48cGF0aCBkPSJtMzYwLjI2NSAxNzcuOTI2LTEuNzE3IDI0LjE3N2MtMS4xNzUgMTEuMTU3LTEwLjk4MiAxOS4zMDEtMjEuNzkgMTguMDg5bC0xLjg2NC0uMjAyYy03LjU2NiAyMC4yOTMtMTYuNTkyIDM0LjM4OC0yNi4wNzggNDQuMjc3LTE4LjI5MSAxOS4wODEtMzguMjk5IDIyLjU1Mi01Mi44MTcgMjQuODQ3di0yMTQuNDA2YzM4Ljc0IDAgODQuNTIzIDIwLjkxNyA4OC4yNTEgNzcuNTE3IDEwLjAxOSAxLjkzOCAxNy4xMzUgMTUuMDc3IDE2LjAxNSAyNS43MDF6IiBmaWxsPSIjZWFhNjc4IiBkYXRhLW9yaWdpbmFsPSIjZWFhNjc4IiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTM3NS4wOTMgMTExLjAwMnMtNDUuMjg1LTU0LjQwOS05Ni45MjMtNjYuNjE0Yy0yMy4zNjktNS41MjMtNTMuMzk2IDEuNTYxLTczLjQyNyAyMi43MTgtMjYuMzkzIDIuMzA4LTU3LjQ3OCAyMy40NjctMzkuNjU4IDEwNS40MjNsMjAuNzAyIDIzLjA3IDEwLjU3NC01My41MjZjMjMuMzc4IDYuNDc3IDcwLjc3IDE1LjYxIDExOC45OTMgMS4zNzhsMTAuMzAyIDUyLjE0OSAyMC43MDItMjMuMDdjMy42OTEtMTcuNDYzIDQuNzMyLTMxLjkyIDMuODU2LTQzLjkxMyA4LjQ5MS00Ljg2OSAxNi44MzEtMTAuNjggMjQuODc5LTE3LjYxNXoiIGZpbGw9IiNhZjVlMjIiIGRhdGEtb3JpZ2luYWw9IiNhZjVlMjIiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMzUwLjIxIDEyOC42MmMuODggMTEuOTktLjE2IDI2LjQ0LTMuODUgNDMuOTFsLTIwLjcgMjMuMDctMTAuMzEtNTIuMTVjLTIwLjUzIDYuMDYtNDAuOTEgNy44OC01OS4zNSA3LjQ3di0xMDguMDdjNy42OS0uNjMgMTUuMjItLjEgMjIuMTcgMS41NCA1MS42NCAxMi4yIDk2LjkyIDY2LjYxIDk2LjkyIDY2LjYxLTguMDQgNi45NC0xNi4zOCAxMi43NS0yNC44OCAxNy42MnoiIGZpbGw9IiM4OTQ5MWQiIGRhdGEtb3JpZ2luYWw9IiM4OTQ5MWQiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMzQ1LjkyIDQ5NS43NWMtMTAuOTYgNC4xMi0yMi4yOCA3LjUtMzMuODkgMTAuMDktMTguMDMgNC4wNC0zNi43OCA2LjE2LTU2LjAzIDYuMTZzLTM4LTIuMTItNTYuMDMtNi4xNmMtMTEuNjEtMi41OS0yMi45My01Ljk3LTMzLjg5LTEwLjA5bDMzLjg5LTE2NS43YzEyLjkzIDIwLjczIDM0LjQ4IDMxLjA5IDU2LjAzIDMxLjA5czQzLjEtMTAuMzYgNTYuMDMtMzEuMDl6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjZmZmZmZmIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTM0NS45MiA0OTUuNzVjLTEwLjk2IDQuMTItMjIuMjggNy41LTMzLjg5IDEwLjA5LTE4LjAzIDQuMDQtMzYuNzggNi4xNi01Ni4wMyA2LjE2di0xNTAuODZjMjEuNTUgMCA0My4xLTEwLjM2IDU2LjAzLTMxLjA5eiIgZmlsbD0iI2NlY2VjZSIgZGF0YS1vcmlnaW5hbD0iI2NlY2VjZSIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0xOTkuOTcgMzMwLjA1djE3NS43OWMtNDguNjItMTAuODUtOTIuMDMtMzUuNTQtMTI1Ljg3LTY5Ljcxdi02MS43YzAtMjQuNTEgMTkuODctNDQuMzggNDQuMzgtNDQuMzh6IiBmaWxsPSIjMzM2YjkwIiBkYXRhLW9yaWdpbmFsPSIjMzM2YjkwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTQzNy45IDM3NC40M3Y2MS43Yy0zMy44NCAzNC4xNy03Ny4yNSA1OC44Ni0xMjUuODcgNjkuNzF2LTE3NS43OWg4MS40OWMyNC41MSAwIDQ0LjM4IDE5Ljg3IDQ0LjM4IDQ0LjM4eiIgZmlsbD0iIzIwNTA3NyIgZGF0YS1vcmlnaW5hbD0iIzIwNTA3NyIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0xNTcuMzMgNDE5LjY0NXY3Mi42MjVjLTExLjE3LTQuNjYtMjEuOTUtMTAuMTEtMzIuMjUtMTYuMjV2LTU2LjM3NXoiIGZpbGw9IiMyMDUwNzciIGRhdGEtb3JpZ2luYWw9IiMyMDUwNzciIHN0eWxlPSIiPjwvcGF0aD48cGF0aCBkPSJtMzg2LjkyIDQxOS42NDV2NTYuMzc1Yy0xMC4zIDYuMTQtMjEuMDggMTEuNTktMzIuMjUgMTYuMjV2LTcyLjYyNXoiIGZpbGw9IiMxNjNjNjYiIGRhdGEtb3JpZ2luYWw9IiMxNjNjNjYiIHN0eWxlPSIiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">
                      John Doe
                    </div>
                    <div className="text-sm font-medium leading-none text-gray-400">
                      johndoe@mail.com
                    </div>
                  </div>
                  <button className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 px-2 space-y-1">
                  {profile.map((item) => (
                    <a
                      key={item}
                      href="/#"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
