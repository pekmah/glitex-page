import React from "react";
import { GrClose } from "react-icons/gr";
import Link from "next/Link";

const SideNav = ({ handleCloseNav, isOpen }) => {
  return (
    <div
      className={`z-40 top-0 fixed right-0 bottom-0 h-screen bg-[#00000050]  ${
        isOpen ? " w-screen " : "w-0"
      } transition-all duration-500 ease-in-out overflow-hidden`}
      //   onClick={handleCloseNav}
    >
      <div
        className={`float-right h-full bg-black z-50 ${
          isOpen ? " w-screen lg:w-[30vw] md:w-[50vw] sm:w-[70vw]" : "w-0"
        } transition-all duration-700 ease-in-out overflow-hidden`}
        onClick={() => {}}
      >
        <div className={`block`}>
          <div className="p-5 flex justify-end">
            <button className="" onClick={handleCloseNav}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.02136 28.9813L15.0027 15M28.984 1.01868L15 15M15 15L1.02136 1.01868M15.0027 15L28.984 28.9813"
                  stroke="#FFC53F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className=" flex flex-col justify-center items-center gap-8 py-16">
            {nav_list_items?.map((item, i) => (
              <Link href={item?.link} key={i}>
                <button
                  className={`text-primary font-semibold duration-700  ${
                    isOpen ? "md:text-2xl text-xl" : "text-[0px]"
                  } `}
                >
                  {item?.name}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;

// nav list items
const nav_list_items = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Team",
    link: "/team",
  },
  {
    name: "Services",
    link: "",
  },
  {
    name: "Portfolio",
    link: "/portfolio",
  },
  {
    name: "Mobile Application",
    link: "mobile",
  },
  {
    name: "Onboarding process",
    link: "",
  },
  {
    name: "Contact",
    link: "",
  },
];
