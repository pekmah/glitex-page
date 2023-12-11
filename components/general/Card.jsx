import React from "react";
import { CButtonOutlined } from "./index";

const Card = ({ title, body }) => {
  return (
    <div className={"rounded-xl c-shadow bg-white p-5 flex-1 text-left"}>
      {/*    title    */}
      <h5>{title}</h5>
      {/*  body  */}
      <div
        className={"mt-3 mb-5 font-lato font-normal text-primary-pale"}
        dangerouslySetInnerHTML={{ __html: body }}
      />
      {/*    button   */}
      <CButtonOutlined text={"View Services"} />
    </div>
  );
};

export default Card;
