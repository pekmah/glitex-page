import { Controller, useForm } from "react-hook-form";

import { CButton } from "../general";
import React from "react";
import Router from "next/router";
import { sendEmail } from "../../helpers/helpers";
import { useMutation } from "@tanstack/react-query";

const Form = () => {
  const { handleSubmit, control, reset } = useForm();

  const sendEmailMutation = useMutation({
    mutationFn: sendEmail,
    onSuccess: () => {
      alert("Email Sent");
      reset();
      Router.reload();
    },
    onError: () => {
      alert("Failed to send email");
    },
  });

  const onSubmit = (data) => {
    sendEmailMutation.mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 py-3"
    >
      <div className="flex flex-col gap-5 md:flex-row">
        <InputItem
          control={control}
          label="Your Name"
          className="flex-1"
          type="text"
          name="name"
          required
        />
        <InputItem
          control={control}
          label="Phone Number"
          className="flex-1"
          type="text"
          name="phone"
          placeholder="Enter Phone Number"
          required
        />
      </div>

      <InputItem
        control={control}
        label="Your Email Address"
        className="flex-1"
        type="email"
        placeholder="Enter Email"
        name="email"
        required
      />
      <InputItem
        control={control}
        label="You are inquiring about?"
        className="flex-1"
        type="text"
        placeholder="Enter topic"
        name="subject"
        required
      />
      <TextArea
        control={control}
        className="flex-1"
        type="text"
        placeholder="Enter topic"
        name="message"
      />

      <div className="flex">
        <CButton
          className={"px-10 text-xs md:text-base rounded-lg font-medium"}
          text={sendEmailMutation.isPending ? "Sending..." : "Send Inquiry"}
          type={"submit"}
          disabled={sendEmailMutation.isPending}
        />
      </div>
    </form>
  );
};

export default Form;

const InputItem = ({
  className,
  label,
  leftElement,
  control,
  name,
  ...rest
}) => {
  return (
    <Controller
      control={control}
      rules={{
        required: true,
      }}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <div className={`p-3 border rounded-xl border-[#E6E6E6] ${className}`}>
          <label className="mb-0 text-base font-normal text-primary font-lato">
            {label}
          </label>
          <div
            className={`flex gap-1 border-b  group-focus:border-primary ${value ? "border-primary" : "border-[#E6E6E6]"}`}
          >
            {leftElement}
            <input
              className="w-full py-2 font-normal focus:outline-none focus:text-primary focus:border-b-[0px] text-primary "
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              {...rest}
              style={{ borderWidth: 0 }}
            />
          </div>
        </div>
      )}
    />
  );
};

// type TextAreaItemProps = {} & React.InputHTMLAttributes<HTMLTextAreaElement>;
const TextArea = ({
  className,
  control,

  ...rest
}) => {
  return (
    <Controller
      control={control}
      rules={{
        required: true,
      }}
      name={"message"}
      render={({ field: { onChange, onBlur, value } }) => (
        <div className={`p-3 border rounded-xl border-[#E6E6E6] ${className}`}>
          <div className="flex gap-1 group-focus:border-primary ">
            <textarea
              className="w-full font-normal focus:outline-none focus:text-primary focus:border-b-[0px] text-primary "
              rows={6}
              {...rest}
              style={{ borderWidth: 0 }}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
            />
          </div>
        </div>
      )}
    />
  );
};
