import React, { useState } from "react";
import Button from "../Button";
import { handleDialerButtonClick } from "../../main/header";
import {
  handleChangeDataFn,
  parseErrorResponse,
  showAlert,
} from "../../../helpers/helpers";
import axios from "axios";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    axios
      .post("/api/contact", state)
      .then((res) => {
        if (res?.status === 200) {
          setState({});
          showAlert(
            "success",
            "Success",
            "Your message was submitted successfully!"
          );
        } else {
          showAlert("error", "Error", parseErrorResponse({}));
        }
      })
      .catch((e) => {
        console.log(e);
        showAlert("error", "Error", parseErrorResponse({}));
      })
      .finally(() => {
        setLoading(false);
        setState({});
      });
    //setLoading(true);
    //setErrors({});
    //await sendMail();
    /*makeRequest(POST_REQUEST, endpoints.contact, data, () => {
            showAlert('success', 'Success', 'Your message was submitted successfully!');
            setData({});
        }, error => {
            if (error.response.status === 400)
                setErrors(error.response.data.data.errors);
            else
                showAlert('error', 'Error', parseErrorResponse(error));
        }, () => {
            setLoading(false);
        }).then()*/
  };

  return (
    <div className="text-white bg-inherit flex-1" id="contact">
      {/*inputs */}
      <div className="lg:flex gap-2 text-white">
        <div className="flex-1 flex flex-col gap-3">
          {/* Name input */}
          <div className="">
            <h6 className="text-primary font-medium ">Name</h6>

            {/* input */}
            <input
              name="name"
              onChange={(e) => handleChangeDataFn(e, setState)}
              type="text"
              placeholder="Your Name"
              minLength="2"
              required
              aria-required="true"
              style={{ color: "whitesmoke" }}
              value={state?.name}
              className=" p-2 h-12 bg-[#1f1f1f] w-full mt-2 rounded focus:outline-none"
            />
          </div>

          {/* Email input */}
          <div className="">
            <h6 className="text-primary font-medium ">Your Email</h6>

            {/* input */}
            <input
              style={{ color: "whitesmoke" }}
              name="email"
              onChange={(e) => handleChangeDataFn(e, setState)}
              type="email"
              placeholder="Your Email"
              required
              aria-required="true"
              value={state?.email}
              className="  p-2 h-12 bg-[#1f1f1f] w-full mt-2 rounded focus:outline-none"
            />
          </div>

          {/* Subject input */}
          <div className="">
            <h6 className="text-primary font-medium ">Subject</h6>

            {/* input */}
            <input
              style={{ color: "whitesmoke" }}
              name="subject"
              onChange={(e) => handleChangeDataFn(e, setState)}
              type="text"
              id="contactSubject"
              placeholder="Subject"
              value={state?.subject}
              className=" focus:text-slate-50 p-2 h-12 bg-[#1f1f1f] w-full mt-2 rounded focus:outline-none"
            />
          </div>
        </div>

        <div className="  lg:h-auto flex flex-col flex-1 mt-6 lg:mt-0 lg:px-4 ">
          <textarea
            style={{ color: "whitesmoke" }}
            className="h-64 mt-2 focus:outline-none bg-[#1f1f1f] p-2  w-full rounded-md"
            name="message"
            onChange={(e) => handleChangeDataFn(e, setState)}
            placeholder="Your Message"
            value={state?.message}
            cols="50"
            required
            aria-required="true"
          ></textarea>

          <div className={"flex"}>
            {!loading && (
              <Button
                onClick={handleSubmit}
                text={"Send"}
                handleClick={handleDialerButtonClick}
                className={
                  "bg-primary rounded mt-1 text-secondary px-5 lg:px-8 py-2 mx-auto text-[28px] flex-1"
                }
              />
            )}

            {loading && (
              <div
                className={
                  "flex justify-center w-full p-3 mt-2 rounded bg-[#ffffff10]"
                }
                role="status"
              >
                <svg
                  aria-hidden="true"
                  className="inline w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="">Sending...</span>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* text area */}
    </div>
  );
};

export default ContactForm;
