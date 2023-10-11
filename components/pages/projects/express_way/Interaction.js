import React from "react";

const Interaction = () => {
  return (
    <div className={"my-16"}>
      <h4 className={"font-semibold text-xl md:text-2xl  mb-3 text-center"}>
        Interact with the app
      </h4>
      <div
        className={
          "md:bg-black md:py-5 flex justify-center h-[98vh] md:h-[600px]"
        }
      >
        <iframe
          // style="border: 1px solid rgba(0, 0, 0, 0.1);"
          style={{ border: "none" }}
          className={"border-none"}
          width="320"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FIWVao7P5paYjAvYGETr1q7%2FExpress-Way-App%3Ftype%3Ddesign%26node-id%3D190-111%26t%3Dwv5jWjpVkkDbpkgs-1%26scaling%3Dscale-down%26page-id%3D190%253A110%26starting-point-node-id%3D190%253A111%26mode%3Ddesign"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Interaction;
