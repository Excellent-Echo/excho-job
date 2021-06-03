import UserHeader from "../../components/UserHeader";

export default function JobDetails() {
  return (
    <>
      <UserHeader />
      {/*container*/}
      <div className="flex m-10">
        {/*job*/}
        <div className="w-8/12">
          {/*job banner*/}
          <div className="border rounded-xl p-10 flex">
            {/*company's logo*/}
            <div className="flex flex-1 justify-center items-center">
              <img
                className="h-16"
                src="https://www.crowde.co/static/images/logo-color.png"
                alt="Crowde's logo"
              />
            </div>
            {/*company's logo*/}

            {/*brief job desc*/}
            <div className="flex-1 flex justify-center items-center">
              <div className="flex flex-col">
                {/*job position*/}
                <span className="mb-2 text-2xl font-medium">
                  Fullstack Website Developer
                </span>
                {/*job position*/}

                {/*Company location*/}
                <span className="mb-2 text-lg ">
                  Crowde ◾ Jakarta Selatan, Indonesia
                </span>
                {/*Company location*/}

                {/*salary*/}
                <span className="mb-2 text-lg ">$99999 / hour</span>
                {/*salary*/}

                {/*info*/}
                <span className="mb-2 text-lg ">
                  <span className="text-green-600">26 minutes ago</span> ◾{" "}
                  <span className="text-gray-500">1642 applicants</span>
                </span>
                {/*info*/}

                <button className="border hover:bg-blue-600 rounded-full px-4 py-2 font-medium bg-blue-500 text-white">
                  Apply Now
                </button>
              </div>
            </div>
            {/*brief job desc*/}
          </div>
          {/*job banner*/}

          {/*job details*/}
          <div className="ml-8 w-9/12">
            <p className="mt-10 mb-6">The job poster from Crowde</p>
            <div className="">
              <div className="flex mb-6 items-center flex-1">
                <img
                  className="h-16 w-16 rounded-full m-2"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PGc+PGc+PGcgaWQ9IlhNTElEXzExMzhfIj48ZyBpZD0iWE1MSURfMTEzOV8iPjxnIGlkPSJYTUxJRF8xMjA5XyI+PGcgaWQ9IlhNTElEXzEyMTBfIj48ZyBpZD0iWE1MSURfMTIxMV8iPjxnIGlkPSJYTUxJRF8xMjEyXyI+PGcgaWQ9IlhNTElEXzEyMTNfIj48ZyBpZD0iWE1MSURfMTIxNF8iPjxnIGlkPSJYTUxJRF8xMjE1XyI+PGcgaWQ9IlhNTElEXzEyMTZfIj48ZyBpZD0iWE1MSURfMTIxN18iPjxnIGlkPSJYTUxJRF8xMjE4XyI+PGcgaWQ9IlhNTElEXzEyMTlfIj48ZyBpZD0iWE1MSURfMTIyMF8iPjxnPjxwYXRoIGQ9Im01MTIgMjU2YzAgNzAuMjQtMjguMyAxMzMuODctNzQuMSAxODAuMTMtMjUuNzYgMjYuMDEtMzM4LjA0IDI2LjAxLTM2My44IDAtNDUuOC00Ni4yNi03NC4xLTEwOS44OS03NC4xLTE4MC4xMyAwLTE0MS4zOCAxMTQuNjItMjU2IDI1Ni0yNTZzMjU2IDExNC42MiAyNTYgMjU2eiIgZmlsbD0iI2ZiZTI4MCIgZGF0YS1vcmlnaW5hbD0iI2ZiZTI4MCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjxwYXRoIGQ9Im01MTEuODY1IDI0Ny43NzUtMTM2Ljc3NS0xMzYuNzc1LTkwLjcxNi41NDEtMTIyLjM4OCAxMDUuMTk3IDIzMS43MzIgMjMxLjczMmMyMi45MjEtMy4xMDUgMzkuMTA5LTcuMjE4IDQ0LjE4Mi0xMi4zNCA0NS44LTQ2LjI2IDc0LjEtMTA5Ljg5IDc0LjEtMTgwLjEzIDAtMi43NTItLjA0OS01LjQ5My0uMTM1LTguMjI1eiIgZmlsbD0iI2VmYzg1OSIgZGF0YS1vcmlnaW5hbD0iI2VmYzg1OSIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0xOTkuOTcgMjUwLjIzMmgxMTIuMDZ2MTE4Ljg0aC0xMTIuMDZ6IiBmaWxsPSIjZWFhNjc4IiBkYXRhLW9yaWdpbmFsPSIjZWFhNjc4IiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTI1NiAyNTAuMjM2aDU2LjAzdjExOC44NGgtNTYuMDN6IiBmaWxsPSIjZDM4YzViIiBkYXRhLW9yaWdpbmFsPSIjZDM4YzViIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTE5OS45NyAzMzAuMDVoMTEyLjA2djExOC44NGgtMTEyLjA2eiIgZmlsbD0iI2ZmYzM5NyIgZGF0YS1vcmlnaW5hbD0iI2ZmYzM5NyIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0yNTYgMzMwLjA1aDU2LjAzdjExOC44NGgtNTYuMDN6IiBmaWxsPSIjZWFhNjc4IiBkYXRhLW9yaWdpbmFsPSIjZWFhNjc4IiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTM0NC4yNTEgMTUyLjIyNWMtMy43MjgtNTYuNi00OS41MTEtNzcuNTE3LTg4LjI1MS03Ny41MTdzLTg0LjUyMyAyMC45MTctODguMjUxIDc3LjUxN2MtMTAuMDE4IDEuOTM4LTE3LjEzNCAxNS4wNzctMTYuMDE0IDI1LjcwMWwxLjcxNyAyNC4xNzdjMS4xNzUgMTEuMTU3IDEwLjk4MiAxOS4zMDEgMjEuNzkgMTguMDg5bDEuODY0LS4yMDJjMjIuMTM5IDU5LjQ0NiA1Ni44NTcgNjUuNjQ0IDc4Ljg5NCA2OS4xMjUgMjIuMDM3LTMuNDggNTYuNzU2LTkuNjc4IDc4Ljg5NC02OS4xMjVsMS44NjQuMjAyYzEwLjgwNyAxLjIxMiAyMC42MTQtNi45MzIgMjEuNzktMTguMDg5bDEuNzE3LTI0LjE3N2MxLjEyLTEwLjYyNC01Ljk5Ni0yMy43NjMtMTYuMDE0LTI1LjcwMXoiIGZpbGw9IiNmZmMzOTciIGRhdGEtb3JpZ2luYWw9IiNmZmMzOTciIHN0eWxlPSIiPjwvcGF0aD48cGF0aCBkPSJtMzYwLjI2NSAxNzcuOTI2LTEuNzE3IDI0LjE3N2MtMS4xNzUgMTEuMTU3LTEwLjk4MiAxOS4zMDEtMjEuNzkgMTguMDg5bC0xLjg2NC0uMjAyYy03LjU2NiAyMC4yOTMtMTYuNTkyIDM0LjM4OC0yNi4wNzggNDQuMjc3LTE4LjI5MSAxOS4wODEtMzguMjk5IDIyLjU1Mi01Mi44MTcgMjQuODQ3di0yMTQuNDA2YzM4Ljc0IDAgODQuNTIzIDIwLjkxNyA4OC4yNTEgNzcuNTE3IDEwLjAxOSAxLjkzOCAxNy4xMzUgMTUuMDc3IDE2LjAxNSAyNS43MDF6IiBmaWxsPSIjZWFhNjc4IiBkYXRhLW9yaWdpbmFsPSIjZWFhNjc4IiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTM3NS4wOTMgMTExLjAwMnMtNDUuMjg1LTU0LjQwOS05Ni45MjMtNjYuNjE0Yy0yMy4zNjktNS41MjMtNTMuMzk2IDEuNTYxLTczLjQyNyAyMi43MTgtMjYuMzkzIDIuMzA4LTU3LjQ3OCAyMy40NjctMzkuNjU4IDEwNS40MjNsMjAuNzAyIDIzLjA3IDEwLjU3NC01My41MjZjMjMuMzc4IDYuNDc3IDcwLjc3IDE1LjYxIDExOC45OTMgMS4zNzhsMTAuMzAyIDUyLjE0OSAyMC43MDItMjMuMDdjMy42OTEtMTcuNDYzIDQuNzMyLTMxLjkyIDMuODU2LTQzLjkxMyA4LjQ5MS00Ljg2OSAxNi44MzEtMTAuNjggMjQuODc5LTE3LjYxNXoiIGZpbGw9IiNhZjVlMjIiIGRhdGEtb3JpZ2luYWw9IiNhZjVlMjIiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMzUwLjIxIDEyOC42MmMuODggMTEuOTktLjE2IDI2LjQ0LTMuODUgNDMuOTFsLTIwLjcgMjMuMDctMTAuMzEtNTIuMTVjLTIwLjUzIDYuMDYtNDAuOTEgNy44OC01OS4zNSA3LjQ3di0xMDguMDdjNy42OS0uNjMgMTUuMjItLjEgMjIuMTcgMS41NCA1MS42NCAxMi4yIDk2LjkyIDY2LjYxIDk2LjkyIDY2LjYxLTguMDQgNi45NC0xNi4zOCAxMi43NS0yNC44OCAxNy42MnoiIGZpbGw9IiM4OTQ5MWQiIGRhdGEtb3JpZ2luYWw9IiM4OTQ5MWQiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCBkPSJtMzQ1LjkyIDQ5NS43NWMtMTAuOTYgNC4xMi0yMi4yOCA3LjUtMzMuODkgMTAuMDktMTguMDMgNC4wNC0zNi43OCA2LjE2LTU2LjAzIDYuMTZzLTM4LTIuMTItNTYuMDMtNi4xNmMtMTEuNjEtMi41OS0yMi45My01Ljk3LTMzLjg5LTEwLjA5bDMzLjg5LTE2NS43YzEyLjkzIDIwLjczIDM0LjQ4IDMxLjA5IDU2LjAzIDMxLjA5czQzLjEtMTAuMzYgNTYuMDMtMzEuMDl6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjZmZmZmZmIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTM0NS45MiA0OTUuNzVjLTEwLjk2IDQuMTItMjIuMjggNy41LTMzLjg5IDEwLjA5LTE4LjAzIDQuMDQtMzYuNzggNi4xNi01Ni4wMyA2LjE2di0xNTAuODZjMjEuNTUgMCA0My4xLTEwLjM2IDU2LjAzLTMxLjA5eiIgZmlsbD0iI2NlY2VjZSIgZGF0YS1vcmlnaW5hbD0iI2NlY2VjZSIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0xOTkuOTcgMzMwLjA1djE3NS43OWMtNDguNjItMTAuODUtOTIuMDMtMzUuNTQtMTI1Ljg3LTY5Ljcxdi02MS43YzAtMjQuNTEgMTkuODctNDQuMzggNDQuMzgtNDQuMzh6IiBmaWxsPSIjMzM2YjkwIiBkYXRhLW9yaWdpbmFsPSIjMzM2YjkwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTQzNy45IDM3NC40M3Y2MS43Yy0zMy44NCAzNC4xNy03Ny4yNSA1OC44Ni0xMjUuODcgNjkuNzF2LTE3NS43OWg4MS40OWMyNC41MSAwIDQ0LjM4IDE5Ljg3IDQ0LjM4IDQ0LjM4eiIgZmlsbD0iIzIwNTA3NyIgZGF0YS1vcmlnaW5hbD0iIzIwNTA3NyIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIGQ9Im0xNTcuMzMgNDE5LjY0NXY3Mi42MjVjLTExLjE3LTQuNjYtMjEuOTUtMTAuMTEtMzIuMjUtMTYuMjV2LTU2LjM3NXoiIGZpbGw9IiMyMDUwNzciIGRhdGEtb3JpZ2luYWw9IiMyMDUwNzciIHN0eWxlPSIiPjwvcGF0aD48cGF0aCBkPSJtMzg2LjkyIDQxOS42NDV2NTYuMzc1Yy0xMC4zIDYuMTQtMjEuMDggMTEuNTktMzIuMjUgMTYuMjV2LTcyLjYyNXoiIGZpbGw9IiMxNjNjNjYiIGRhdGEtb3JpZ2luYWw9IiMxNjNjNjYiIHN0eWxlPSIiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
                  alt=""
                />
                <div className="flex flex-col ">
                  <p className="font-medium flex-1">Muhammad Fauzul Hanif</p>
                  <p className=" flex-1">Senior Fullstack Web Developer</p>
                </div>
              </div>

              <div className="flex-1">
                <div className="mb-6">
                  <p className="font-medium mb-4">Job Description</p>
                  <ul className="list-disc list-inside">
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Animi atque cumque distinctio eaque excepturi facilis,
                      inventore provident quasi quia quod repellat repellendus
                      ut! Ab adipisci autem magni nulla perspiciatis, tenetur!
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Animi atque cumque distinctio eaque excepturi facilis,
                      inventore provident quasi quia quod repellat repellendus
                      ut! Ab adipisci autem magni nulla perspiciatis, tenetur!
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <p className="font-medium mb-4">Skills</p>
                  <ul className="list-disc list-inside">
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <p className="font-medium mb-4">Requirements</p>
                  <ul className="list-disc list-inside">
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/*job details*/}
        </div>
        {/*job*/}
      </div>
      {/*container*/}
    </>
  );
}