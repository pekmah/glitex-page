import React from "react";

const Card = ({ index, title, description }) => {
  return (
    <div
      className={
        "c-shadow bg-white text-primary hover:bg-primary hover:text-white focus:bg-primary focus:text-white rounded-[40px] p-12"
      }
    >
      {/*  index label  */}

      <div className={"h-12 w-12 rounded-full bg-c-yellow center flex-col"}>
        <h4 className={"text-white"}>{index}</h4>
      </div>
      <h5 className={"my-5 text-inherit"}>{title}</h5>

      <p className={"text-inherit"}>{description}</p>
    </div>
  );
};

export default Card;
