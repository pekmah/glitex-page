import React from "react";
import Button from "../../general/Button";
import OutlinedButton from "../../general/OutlinedButton";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { handleDialerButtonClick } from "../../main/header";
import Link from "next/link";

const HeaderCarousel = () => {
  return (
    <div
      className={
        "h-[86vh] bg-no-repeat bg-cover flex flex-col justify-center relative"
      }
      style={{
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.61)), url(/images/typing.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="lg:px-8 md:px-16 sm:px-12 px-2 w-full lg:w-[90%] font-bold text-2xl md:text-5xl leading-[50px] md:leading-[70px] pt-5">
        <div className="">
          <span className=" text-primary">
            Software development that helps turn &nbsp;
          </span>
          <span className="text-white">your ideas</span>{" "}
          <span className=" text-primary">into meaningful, tangible</span>{" "}
          <span className="text-white">results</span>
        </div>

        <div className="my-8">
          <div className="flex gap-2 font-light">
            <div className="text-white lg:text-xl text-lg md:text-xl">
              Quality
            </div>
            <div className="text-white lg:text-xl text-lg md:text-xl">.</div>
            <div className="text-white lg:text-xl text-lg md:text-xl">
              Security
            </div>
            <div className="text-white lg:text-xl text-lg md:text-xl">.</div>
            <div className="text-white lg:text-xl text-lg md:text-xl">
              Scalable
            </div>
          </div>

          <div className="mt-7 flex gap-4">
            <Button
              handleClick={handleDialerButtonClick}
              text={"Talk to Us"}
              className={"text-[20px] py-2 px-6"}
            />
            <Link href={"#about"}>
              <OutlinedButton
                className={"text-[20px] py-2 px-6"}
                text={"Learn more"}
              />
            </Link>
          </div>

          <ul className={"flex md:hidden justify-center py-5 z-40 gap-4"}>
            <a href={"https://web.facebook.com/glitexsolutionslimited"}>
              <li
                className={
                  "w-10 h-10 border-2 border-primary rounded-full flex items-center p-0"
                }
              >
                <FaFacebookF className={"mx-auto text-white text-xl"} />
              </li>
            </a>

            <a href={"https://twitter.com/GlitexSolutions"}>
              <li
                className={
                  "w-10 h-10 border-2 border-primary rounded-full flex items-center p-0"
                }
              >
                <FaTwitter className={"mx-auto text-white text-xl"} />
              </li>
            </a>

            <a href={"https://www.instagram.com/glitexsolutions/"}>
              <li
                className={
                  "w-10 h-10 border-2 border-primary rounded-full flex items-center p-0"
                }
              >
                <AiFillInstagram className={"mx-auto text-white text-xl"} />
              </li>
            </a>

            <a href={"https://www.linkedin.com/in/glitex-solutions/"}>
              <li
                className={
                  "w-10 h-10 border-2 border-primary rounded-full flex items-center p-0"
                }
              >
                <FaLinkedin className={"mx-auto text-white text-xl"} />
              </li>
            </a>
          </ul>
        </div>
      </div>

      <ul
        className={
          " hidden md:flex absolute top-0 bottom-0 right-10 z-20  flex-col justify-center gap-4"
        }
      >
        <a href={"https://web.facebook.com/glitexsolutionslimited"}>
          <li
            className={
              "w-10 h-10 border-2 border-primary rounded-full flex items-center p-0"
            }
          >
            <FaFacebookF className={"mx-auto text-white text-xl"} />
          </li>
        </a>

        <a href={"https://twitter.com/GlitexSolutions"}>
          <li
            className={
              "w-10 h-10 border-2 border-primary rounded-full flex items-center p-0"
            }
          >
            <FaTwitter className={"mx-auto text-white text-xl"} />
          </li>
        </a>

        <a href={"https://www.instagram.com/glitexsolutions/"}>
          <li
            className={
              "w-10 h-10 border-2 border-primary rounded-full flex items-center p-0"
            }
          >
            <AiFillInstagram className={"mx-auto text-white text-xl"} />
          </li>
        </a>

        <a href={"https://www.linkedin.com/in/glitex-solutions/"}>
          <li
            className={
              "w-10 h-10 border-2 border-primary rounded-full flex items-center p-0"
            }
          >
            <FaLinkedin className={"mx-auto text-white text-xl"} />
          </li>
        </a>
      </ul>
    </div>
  );
};

export default HeaderCarousel;
