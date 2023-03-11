import React from "react";

const Features = () => {
  return (
    <div
      className={" bg-primary text-center flex flex-col justify-center py-12"}
    >
      <h3 className="lg:text-4xl sm:text-3xl text-xl font-bold lg:leading-[50px] sm:leading-[50px] leading-10 lg:w-[85%] mx-auto mb-5">
        Benefits of Search Engine Optimization (SEO)
      </h3>

      {/* VStack */}
      <div className="flex flex-col gap-3 lg:w-5/12 mx-auto">
        {/* Services */}
        <ServiceItem
          title={"Increase in Sales"}
          body={
            <p>
              The higher the number of quality and organic traffic on your
              website, the more the leads and definitely sales you will
              generate.
            </p>
          }
        />
        <ServiceItem
          title={"Website Traffic"}
          body={
            <p>
              SEO drive quality and organic traffic to your website. After we
              offer SEO services, the number of people visiting your website
              will increase.
            </p>
          }
        />
        <ServiceItem
          title={"Sustainable Results"}
          body={
            <p>
              Glitex Solutions Limited will ensure that you maintain high
              ranking on all search engines. We will maintain your ranking in
              search engines 24/7.
            </p>
          }
        />{" "}
        <ServiceItem
          title={"Brand Credibility"}
          body={
            <p>
              Ranking top on Google and other search engines will automatically
              make you look like the leader in your industry.
            </p>
          }
        />
      </div>

      <h3 className="lg:text-2xl text-xl font-bold  mx-auto mt-5 mb-3">
        Our SEO Content Strategy
      </h3>

      <p>
        <li> Make a list of the products and services</li>
        <li>
          {" "}
          Develop a list of keywords related to your products and services.
        </li>
        <li> Develop pages for each product.</li>
        <li> Develop articles for those pages.</li>
        <li> Develop a link-building plan.</li>
        <li> Compressing media to SEO friendly sizes.</li>
      </p>
    </div>
  );
};

export default Features;
const ServiceItem = ({ title, body }) => (
  <div className="text-center ">
    {/* // title */}
    <h6 className="font-bold text-lg">{title}</h6>

    {/* // body */}
    <p className="leading-8 text-lg">{body}</p>
  </div>
);
