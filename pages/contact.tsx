import { handleCall, handleRequestQuote, handleSms } from "../helpers/helpers";

import { CButton } from "../components";
import { ContactForm } from "../components/contact";
import Layout from "../layout";
import React from "react";
import { handleWhatsAppButtonClick } from "../components/general/WhatsappBtn";

const contact = () => {
  return (
    <Layout className="">
      <div className="min-h-[75vh] px-5 md:px-12">
        <div className="flex flex-col-reverse gap-5 my-10 md:flex-row">
          <div className="flex-1 bg-slate-300 min-h-[50vh] md:min-h-full">
            Map comes here{" "}
          </div>
          <div className="flex-1">
            <h2
              className={
                "leading-8 md:leading-11 text-primary text-xl sm:text-2xl md:text-3xl font-bold"
              }
            >
              Get in Touch
            </h2>

            <p className={" leading-7 text-primary text-left mb-2"}>
              Send us an inquiry and we’ll get back to you within 24 business
              hours
            </p>

            {/* form */}
            <ContactForm />
          </div>
        </div>

        <div className="container flex flex-wrap justify-center gap-6 pb-10 mx-auto md:justify-start md:gap-12">
          <CButton
            handleClick={handleCall}
            className={
              "w-3/4 md:w-auto flex justify-center px-3 first:md:px-7 text-xs md:text-sm rounded-lg font-medium bg-white text-primary hover:bg-primary hover:text-white shadow-md"
            }
            text={"Call: +254 707 021 821"}
            left={<CallSvg className="mr-2 fill-current" />}
          />
          <CButton
            handleClick={handleWhatsAppButtonClick}
            className={
              "w-3/4 md:w-auto flex justify-center px-3 first:md:px-7 text-xs md:text-sm rounded-lg font-medium bg-white text-primary hover:bg-primary hover:text-white shadow-md"
            }
            text={"Chat: +254 707 021 821"}
            left={
              <div className="mr-2">
                <WhatsappSvg />
              </div>
            }
          />
          <CButton
            handleClick={handleSms}
            className={
              "w-3/4 md:w-auto flex justify-center px-3 first:md:px-7 text-xs md:text-sm rounded-lg font-medium bg-white text-primary hover:bg-primary hover:text-white shadow-md"
            }
            text={"Chat: +254 707 021 821"}
            left={<MailSvg className="mr-2 stroke-current" />}
          />

          <CButton
            handleClick={handleRequestQuote}
            className={
              "w-3/4 md:w-auto flex justify-center px-5 md:px-12 text-xs md:text-sm rounded-lg font-medium bg-white text-primary hover:bg-primary hover:text-white shadow-md"
            }
            text={"Request Quote"}
            left={<QuoteSvg className="mr-2 stroke-current" />}
          />
        </div>
      </div>
    </Layout>
  );
};

export default contact;

type SvgProps = {
  className?: string;
};
const CallSvg = ({ className }: SvgProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M16.23 12.2598L13.69 11.9698C13.3914 11.9347 13.0886 11.9678 12.8046 12.0665C12.5206 12.1652 12.2626 12.327 12.05 12.5398L10.21 14.3798C7.37123 12.936 5.06382 10.6286 3.62004 7.78977L5.47004 5.93977C5.90004 5.50977 6.11004 4.90977 6.04004 4.29977L5.75004 1.77977C5.69335 1.29194 5.45923 0.842003 5.09228 0.515614C4.72532 0.189226 4.25115 0.00918337 3.76004 0.00976704H2.03004C0.900041 0.00976704 -0.0399593 0.949767 0.0300407 2.07977C0.560041 10.6198 7.39004 17.4398 15.92 17.9698C17.05 18.0398 17.99 17.0998 17.99 15.9698V14.2398C18 13.2298 17.24 12.3798 16.23 12.2598Z"
      fill="inherit"
    />
  </svg>
);

const WhatsappSvg = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_520_148)">
      <path
        d="M0.507923 11.8563C0.507365 13.8728 1.03425 15.8417 2.03611 17.5771L0.412109 23.5066L6.4802 21.9156C8.15856 22.8292 10.039 23.308 11.95 23.3081H11.955C18.2634 23.3081 23.3985 18.1748 23.4012 11.8653C23.4024 8.80792 22.2129 5.93295 20.0516 3.76997C17.8906 1.60718 15.0167 0.415458 11.9545 0.414062C5.64541 0.414062 0.510621 5.54709 0.508016 11.8563"
        fill="url(#paint0_linear_520_148)"
      />
      <path
        d="M0.0995349 11.8527C0.0988837 13.9417 0.644651 15.981 1.68223 17.7786L0 23.9207L6.28567 22.2726C8.01758 23.2168 9.96754 23.7147 11.9517 23.7154H11.9568C18.4915 23.7154 23.8112 18.3975 23.814 11.8621C23.8151 8.69488 22.5827 5.71656 20.3442 3.47609C18.1054 1.23591 15.1287 0.00130233 11.9568 0C5.42102 0 0.10214 5.31721 0.0995349 11.8527ZM3.84288 17.469L3.60819 17.0965C2.62158 15.5277 2.10084 13.7149 2.10158 11.8534C2.10363 6.4213 6.52447 2.00186 11.9606 2.00186C14.5931 2.00298 17.0672 3.02921 18.928 4.89116C20.7887 6.7533 21.8127 9.22865 21.812 11.8614C21.8096 17.2935 17.3887 21.7135 11.9568 21.7135H11.9529C10.1843 21.7126 8.44967 21.2376 6.93693 20.34L6.57693 20.1265L2.84688 21.1045L3.84288 17.469Z"
        fill="url(#paint1_linear_520_148)"
      />
      <path
        d="M8.99304 6.89771C8.77108 6.4044 8.5375 6.39445 8.32643 6.3858C8.15359 6.37836 7.95601 6.37892 7.75862 6.37892C7.56104 6.37892 7.24001 6.45324 6.96866 6.74952C6.69704 7.04608 5.93164 7.76273 5.93164 9.22031C5.93164 10.678 6.99332 12.0866 7.14132 12.2845C7.2895 12.482 9.1909 15.5689 12.2022 16.7564C14.7049 17.7433 15.2142 17.547 15.7574 17.4975C16.3007 17.4482 17.5103 16.7811 17.7571 16.0892C18.0041 15.3975 18.0041 14.8046 17.9301 14.6807C17.856 14.5572 17.6584 14.4831 17.3622 14.335C17.0658 14.1868 15.6092 13.4701 15.3377 13.3712C15.0661 13.2724 14.8686 13.2231 14.671 13.5198C14.4734 13.8159 13.9061 14.4831 13.7331 14.6807C13.5604 14.8787 13.3875 14.9034 13.0913 14.7552C12.7948 14.6065 11.8407 14.2941 10.7087 13.2849C9.82792 12.4996 9.23331 11.5298 9.06048 11.2331C8.88764 10.937 9.04197 10.7764 9.19052 10.6288C9.32364 10.496 9.4869 10.2828 9.63518 10.1099C9.7829 9.93687 9.8322 9.81343 9.93099 9.61585C10.0299 9.41808 9.98038 9.24506 9.90643 9.09687C9.8322 8.94868 9.25648 7.48347 8.99304 6.89771Z"
        fill="white"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_520_148"
        x1="1149.87"
        y1="2309.67"
        x2="1149.87"
        y2="0.414062"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#1FAF38" />
        <stop offset="1" stop-color="#60D669" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_520_148"
        x1="1190.7"
        y1="2392.07"
        x2="1190.7"
        y2="0"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#F9F9F9" />
        <stop offset="1" stop-color="white" />
      </linearGradient>
      <clipPath id="clip0_520_148">
        <rect width="23.814" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const MailSvg = ({ className }: SvgProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M7 9L10.75 12C11.1047 12.284 11.5456 12.4388 12 12.4388C12.4544 12.4388 12.8953 12.284 13.25 12L17 9M21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17Z"
      stroke="inherit"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const QuoteSvg = ({ className }: SvgProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M7.5 15.75V2.25L9 3L10.5 2.25L11.9972 3L13.5145 2.25L15 3L16.4902 2.25L17.9869 3L19.5 2.25L21.0005 3L22.5 2.25V12.75"
      stroke="inherit"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
    <path
      d="M22.5 12.75V18C22.5 18.9946 22.1049 19.9484 21.4017 20.6517C20.6984 21.3549 19.7446 21.75 18.75 21.75M18.75 21.75C17.7555 21.75 16.8016 21.3549 16.0984 20.6517C15.3951 19.9484 15 18.9946 15 18V15.75H2.25003C2.15129 15.7491 2.05337 15.7679 1.96198 15.8053C1.87059 15.8427 1.78757 15.8979 1.71775 15.9677C1.64793 16.0375 1.59272 16.1206 1.55534 16.212C1.51796 16.3033 1.49915 16.4013 1.50003 16.5C1.50003 19.5 1.81597 21.75 5.25003 21.75H18.75Z"
      stroke="inherit"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
    <path
      d="M10.5 6.75H19.5M13.5 10.5H19.5"
      stroke="inherit"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
