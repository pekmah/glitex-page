import Swal from "sweetalert2";
import { CONTACT_EMAIL, CONTACT_PHONE_NUMBER } from "../constants/defaults";

export const getGallerySlug = (gallery, index) => {
  return `/gallery/${gallery?.name?.replace(/ /g, "-")}-${index}`;
};

export const getServiceSlug = (service, index) => {
  return `/services/${
    service?.link || service?.title?.replace(/ /g, "-")
  }-${index}`;
};

export const parseErrorResponse = function (error) {
  let message;
  if (error.response !== null && error.response !== undefined) {
    if (error.response.data.detail) {
      message = error.response.data.detail;
    }
    if (error.response.data.message) {
      if (Array.isArray(error.response.data.message)) {
        let arr = error.response.data.message;
        message = arr[0].messages[0].message;
      } else message = error.response.data.message;
    } else {
      let response = error.response.data;
      if (typeof response === "string") {
        try {
          message = getStringFromObject(JSON.parse(response));
        } catch (e) {
          message = "An error occurred. Please try again or contact support";
        }
      } else if (typeof response === "object") {
        message = getStringFromObject(response);
      } else {
        message = response;
      }
    }

    if (message.length === 0) {
      switch (error.response.status) {
        case 401:
          message = "Unauthorised. Please log in";
          break;
        case 404:
          message = "The requested resource could not be found";
          break;
        default:
          message = "An error occurred. Please try again, or contact support";
          break;
      }
    }
  } else {
    if (typeof error === "string") {
      message = error;
    } else {
      message = "An error occurred. Please try again, or contact support";
    }
  }

  return message;
};

export const showAlert = (type, title, body) => {
  Swal.fire({
    title: title,
    timer: 5000,
    icon: type,
    text: body,
    timerProgressBar: true,
  }).then();
};

const getStringFromObject = function (obj) {
  let message = "";
  const map = new Map(Object.entries(obj));
  for (const [key, value] of map.entries()) {
    message = `${message} ${key}: ${value}`;
  }
  return message;
};

export const handleChangeDataFn = (e, setData, number) => {
  const name = e.target.name;
  let value = e.target.value;
  if (number) {
    value = e.target.value ? parseInt(e.target.value.replace(/,/g, "")) : 0;
    if (isNaN(value)) return;
  }

  if (setData)
    setData((data) => {
      let dataCopy = { ...data };
      dataCopy[name] = value;
      return dataCopy;
    });
};

const POSSIBLE_ELEMENTS = [
  "<h1",
  "<h2",
  "<h3",
  "<h4",
  "<div",
  "<p",
  "<br",
  "<strong",
  "<ul",
  "<li",
];
/**
 * Checks if a string contains inner html
 * @param {string}  str
 */
export const verifyStringIsInnerHtml = (str) =>
  POSSIBLE_ELEMENTS.some((element) => str?.includes(element));

export const handleRequestQuote = () => {
  window.open("https://isy9wdcrpvv.typeform.com/to/QRkraQZ2");
};
export const handleEmail = () => {
  window.open(`mailto:${CONTACT_EMAIL}?subject=Enquiry&body=`);
};

export const handleCall = () => {
  window.location.href = `tel:${CONTACT_PHONE_NUMBER}`;
};
