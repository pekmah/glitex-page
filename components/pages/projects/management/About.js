import React from "react";

const About = () => {
  return (
    <div
      className={
        "p-3 sm:p-5 md:p-8 lg:p-12 bg-primary text-center flex flex-col justify-center items-center"
      }
    >
      <h3 className="lg:text-4xl sm:text-2xl text-xl font-bold w-[95%] lg:w-[90%] leading-8 md:leading-10 lg:leading-[50px]">
        Management Information Systems
      </h3>

      <p className="md:my-6 lg:text-xl sm:text-lg w-[95%] lg:w-2/3 leading-8 lg:leading-9">
        Developers leverage these languages and frameworks to build hybrid
        mobile applications capable of operating on diverse platforms such as
        iOS, Android, and Windows. Moreover, they facilitate the sharing of a
        substantial portion of the codebase across these platforms. The
        following are the technologies used React Native, Flutter, Ionic,
        Xamarin
      </p>
    </div>
  );
};

export default About;
