import React from "react";
import ContactForm from "../../general/footer/ContactForm";

const Footer = () => {
  return (
    <div>
      <div className="p-8 lg:p-12 flex flex-col md:flex-row gap-4" data-aos="fade-up">
        {/* Glitex solutions logo */}
        <div className="header-logo flex gap-5 items-center w-full flex-[0.4] h-20">
          <img
            src={"/images/logo.png"}
            alt="Glitex Solutions LTD"
            className="lg:h-[60px] sm:h-[50px] h-[40px]"
          />

          <h3 className="text-primary lg:text-2xl text-xl font-semibold">
            Glitex Solutions
          </h3>
        </div>
        {/* Contact form */}
        <ContactForm />
        {/* Contact Details */}
        <div className="flex-[0.4] flex flex-col  gap-5 ">
          {/* Where to find us */}
          <div className="">
            <h5 className="lg:text-2xl text-xl text-primary font-medium">
              Where to find us
            </h5>

            <div className="lg:text-lg text-base text-white">
              <span>Lumumba Drive </span> <br />
              <span>
                Royal plaza <br />
              </span>
            </div>
          </div>

          {/* Email */}
          <div className="">
            <h5 className="lg:text-2xl text-xl text-primary font-medium">
              Email us at
            </h5>

            <div className="lg:text-lg text-base text-white">
              <span>business@glitexsolutions.co.ke </span> <br />
              <span>
                info@glitexsolutions.co.ke <br />
              </span>
            </div>
          </div>

          {/* Contact us at: */}
          <div className="">
            <h5 className="lg:text-2xl text-xl text-primary font-medium">
              Contact us at
            </h5>

            <div className="lg:text-lg text-base text-white">
              <span>Phone: (+254) 707021821 </span> <br />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h5 className="font-semibold text-white p-2">
          &#169; Copyright Glitex Solutions {new Date().getFullYear()}
        </h5>
      </div>
    </div>
  );


};

export default Footer;
