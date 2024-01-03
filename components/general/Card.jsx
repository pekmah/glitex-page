import React from "react";
import {CButtonOutlined} from "./index";
import {useRouter} from "next/router";

/**
 * @param {string} title
 * @param {string} body
 * @param {string} serviceUrl
 * @returns {JSX.Element}
 * @constructor
 */
const Card = ({ title, body, serviceUrl }) => {
  const router = useRouter();

  /**
   * @param {string} url
   */
  const handleViewService = async (url) => {
    await router.push(url);
  };
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
      <CButtonOutlined
        handleClick={() => handleViewService(serviceUrl)}
        text={"View Services"}
      />
    </div>
  );
};

export default Card;
