import React, { ReactNode } from "react";

import { CButton } from "../general";

const Form = () => {
  return (
    <div className="flex flex-col gap-5 py-3">
      <div className="flex flex-col gap-5 md:flex-row">
        <InputItem label="Your Name" className="flex-1" type="text" />
        <InputItem
          label="Phone Number"
          className="flex-1"
          type="text"
          placeholder="712345678"
        />
      </div>

      <InputItem
        label="Your Email Address"
        className="flex-1"
        type="email"
        placeholder="Enter Email"
      />
      <InputItem
        label="You are inquiring about"
        className="flex-1"
        type="text"
        placeholder="Enter topic"
      />
      <TextArea className="flex-1" type="text" placeholder="Enter topic" />

      <div className="flex">
        <CButton
          handleClick={() => {}}
          className={"px-10 text-xs md:text-base rounded-lg font-medium"}
          text={"Send Inquiry"}
        />
      </div>
    </div>
  );
};

export default Form;

type InputItemProps = {
  label: string;
  leftElement?: ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;
const InputItem = ({
  className,
  label,
  leftElement,
  ...rest
}: InputItemProps) => {
  return (
    <div className={`p-3 border rounded-xl border-[#E6E6E6] ${className}`}>
      <label className="mb-0 text-base font-normal text-primary font-lato">
        {label}
      </label>
      <div className="flex gap-1 border-b border-[#E6E6E6] group-focus:border-primary ">
        {leftElement}
        <input
          className="w-full py-2 font-normal focus:outline-none focus:text-primary focus:border-b-[0px] text-primary "
          {...rest}
          style={{ borderWidth: 0 }}
        />
      </div>
    </div>
  );
};

type TextAreaItemProps = {} & React.InputHTMLAttributes<HTMLTextAreaElement>;
const TextArea = ({
  className,

  ...rest
}: TextAreaItemProps) => {
  return (
    <div className={`p-3 border rounded-xl border-[#E6E6E6] ${className}`}>
      <div className="flex gap-1 group-focus:border-primary ">
        <textarea
          className="w-full font-normal focus:outline-none focus:text-primary focus:border-b-[0px] text-primary "
          rows={6}
          {...rest}
          style={{ borderWidth: 0 }}
        />
      </div>
    </div>
  );
};
