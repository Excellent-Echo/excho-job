import { Link } from "react-router-dom";

const usefulLink = [
  { title: "Excellent Excho Project" },
  { title: "Support" },
  { title: "Company" },
  { title: "Legal" },
];

const socialMedia = [
  { class: "bx bxl-facebook hover:text-indigo-500 mx-4" },
  { class: "bx bxl-github hover:text-indigo-500 mx-4" },
  { class: "bx bxl-instagram hover:text-indigo-500 mx-4" },
  { class: "bx bxl-linkedin hover:text-indigo-500 mx-4" },
  { class: "bx bxl-twitter hover:text-indigo-500 mx-4" },
  { class: "bx bxl-youtube hover:text-indigo-500 mx-4" },
];

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center p-10 border-t-2 select-none">
      <div className="text-gray-500">
        {usefulLink.map((link) => (
          <Link className="mx-4 hover:text-blue-500 hover:underline">
            {link.title}
          </Link>
        ))}
      </div>

      <div className="my-6 text-gray-400 text-xl">
        {socialMedia.map((icon) => (
          <Link className={icon.class}></Link>
        ))}
      </div>

      <div className="text-gray-400">
        © 2021. Made with{" "}
        <i className="bx bx-tada bxs-heart text-yellow-500"></i> by Excho Job's
        Team. All rights reserved.
      </div>
    </div>
  );
}