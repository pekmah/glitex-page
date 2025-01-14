import { FaWhatsapp } from "react-icons/fa";
import React from "react";

export const handleWhatsAppButtonClick = () => {
  window.open("https://wa.me/254707021821", "_blank");
};
const WhatsAppButton = () => {
  return (
    <div
      className={"shadow z-20"}
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        color: "#fff",
        borderRadius: "50%",
        background: "#25d366",
        width: "65px",
        height: "65px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={handleWhatsAppButtonClick}
    >
      <FaWhatsapp className="text-white" style={{ fontSize: "44px" }} />
    </div>
  );
};

export default WhatsAppButton;
