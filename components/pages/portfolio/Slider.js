import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import OutlinedButton from "../../general/OutlinedButton";

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const scrollLeft = (nxt) => {
    document.getElementById("content").scrollLeft -=
      window.innerWidth * 0.814643 * Math.abs(nxt - current);
  };
  const scrollRight = (nxt) => {
    document.getElementById("content").scrollLeft +=
      window.innerWidth * 0.814643 * Math.abs(nxt - current);
  };

  const handleScroll = (next_index) => {
    if (next_index < current) {
      // scroll left
      scrollLeft(next_index);
    } else if (next_index === current) {
      // scroll left
      return;
    } else {
      // scroll right
      scrollRight(next_index);
    }
    setCurrent(next_index);
  };

  return (
    <div className="relative bg-white h-screen py-14">
      <h4
        className={
          "lg:text-4xl md:text-3xl text-2xl text-secondary font-bold text-center my-3"
        }
      >
        Some of the work we have done
      </h4>
      <div
        id="content"
        className="carousel p-4 pl-20 flex items-center justify-start overflow-x-auto scroll-smooth no-scrollbar"
      >
        {scrollList?.map((_k, i) => (
          <div key={i}>
            <Card />
          </div>
        ))}
      </div>

      <div className="flex mx-auto pb-3">
        <div className="mx-auto flex gap-3">
          {scrollList?.map((_k, i) => (
            <button
              className={`rounded-full w-3.5 h-3.5 ${
                i === current ? "bg-primary" : "border-[1.5px] border-primary"
              }`}
              onClick={() => handleScroll(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;

function Card() {
  return (
    <>
      <div className="card bg-primary w-[80vw] m-2 rounded-lg px-5">
        <div className="flex py-4">
          {/* image div */}
          <div className="flex items-center justify-center flex-1">
            <img
              src="/images/clients/leta-mobile.png"
              alt="__"
              className="max-h-[400px] h-auto"
            />
          </div>
          {/* text description div */}
          <div className="flex flex-col gap-6 flex-1 justify-center">
            <h5 className="text-3xl font-medium">Leta Mobile Application</h5>

            {/* body */}
            <p className="text-lg w-5/6">
              Mobile application service are aimed at building iOS & Android
              applications that effectively complement or substitute web
              solutions. Having delivered 50+ mobile app development projects so
              far, Glitex ensures app success by delivering striking UI, secure
              app code, and resilient back ends.
            </p>

            <div className="flex">
              <OutlinedButton
                className={"border-secondary text-secondary border-2 text-lg"}
                text={"View more"}
              />
            </div>

            {/* view more button */}
          </div>
        </div>
      </div>
    </>
  );
}

const scrollList = ["item 1", "item 2", "item 3", "item 4"];
