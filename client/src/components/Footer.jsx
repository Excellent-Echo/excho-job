export default function Footer() {
  return (
    <div className="border-t md:p-10 p-4 flex flex-col items-center">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <span className="font-medium mx-6 cursor-pointer hover:text-blue-500 text-gray-500">
          EXCELLENT ECHO PROJECT
        </span>
        <span className="font-medium mx-6 cursor-pointer hover:text-blue-500 text-gray-500">
          COMPANY
        </span>
        <span className="font-medium mx-6 cursor-pointer hover:text-blue-500 text-gray-500">
          SUPPORT
        </span>
        <span className="font-medium mx-6 cursor-pointer hover:text-blue-500 text-gray-500">
          LEGAL
        </span>
      </div>
      <div className="my-6 flex">
        <i className="bx bxl-facebook mx-4 text-xl hover:text-indigo-500 cursor-pointer text-gray-400"></i>
        <i className="bx bxl-github mx-4 text-xl hover:text-indigo-500 cursor-pointer text-gray-400"></i>
        <i className="bx bxl-instagram mx-4 text-xl hover:text-indigo-500 cursor-pointer text-gray-400"></i>
        <i className="bx bxl-linkedin mx-4 text-xl hover:text-indigo-500 cursor-pointer text-gray-400"></i>
        <i className="bx bxl-twitter mx-4 text-xl hover:text-indigo-500 cursor-pointer text-gray-400"></i>
      </div>
      <div className="text-gray-400">
        © 2021. Made with{" "}
        <i className="bx bx-tada bxs-heart text-yellow-500"></i> by Excho Job's
        Team. All rights reserved.
      </div>
    </div>
  );
}