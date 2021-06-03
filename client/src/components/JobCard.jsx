export default function JobCard() {
  return (
    <a
      className="hover:shadow-lg duration-300 border-2 h-60 rounded-xl col-span-12 sm:col-span-6 lg:col-span-4 sm:w-full flex flex-col p-4"
      href="/#"
    >
      <div className="flex justify-center">
        <img
          className="h-16 mr-4"
          src="https://www.crowde.co/static/images/logo-color.png"
          alt=""
        />
      </div>
      <div className="flex flex-col">
        <span className="mb-1 font-medium">Fullstack Website Developer</span>
        <span className="mb-1">Crowde</span>
        <span className="mb-1 text-gray-500">Jakarta Selatan, Indonesia</span>
        <span className="mb-1 text-gray-500">Actively Hiring</span>
        <span className="">
          <span className="font-medium text-green-900">11 hours ago</span> ◾{" "}
          <span className="font-medium text-blue-900">Apply Now</span>
        </span>
      </div>
    </a>
  );
}