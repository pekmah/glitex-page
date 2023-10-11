import React from "react";

const Review = () => {
  return (
    <div className={" "}>
      <h5 className={"text-2xl font-semibold text-black mb-5"}>
        Leave a Review
      </h5>

      <div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfuUmDdhgvT4UxKzEwF4rkmLHoqseO-pgyhH-I5jSQtID23SQ/viewform?embedded=true"
          className={"w-[350px] md:w-[650px]"}
          height="700"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default Review;
