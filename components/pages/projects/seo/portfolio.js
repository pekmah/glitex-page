import React from "react";
import OutlinedButton from "../../../general/OutlinedButton";

const Portfolio = () => {
  return (
    <div className={"bg-secondary py-10 flex flex-col gap-2"}>
      <div className="flex my-4">
        {/* image div */}
        <div className="flex items-center justify-center flex-1 p-10">
          <img
            src="/images/projects/seo-1.jpeg"
            alt="__"
            className=" object-cover h-[500px]"
          />
        </div>
        {/* text description div */}
        <div className="flex flex-col gap-6 flex-1 justify-center text-primary">
          <h5 className="text-3xl font-medium">
            SEO Services in Kenya | Search Engine Optimization Services in Kenya
          </h5>
          {/* body */}
          <p className="text-lg w-11/12 min-h-[300px]">
            It will be a great benefit to your business if your website is
            ranking on top of search engines meaning that proper Search Engine
            Optimization (SEO) services have been offered.  Imagine a scenario
            where customers (Customers who don’t know your company) search for
            products and services on the internet, then they find your company
            then make a call to enquire about products and services. Our team of
            experts will rank your website and product and services page on the
            1st page of Google and all the search engines for the locally
            searched terms, nation wide search, or even better; global searched
            terms. Search Engine Optimization (SEO) refers to the practice of
            boosting organic and the quality traffic to the site in Kenya.  SEO
            is achieved by enhancing ranking results in algorithmic search
            engine.
          </p>

          <div className="flex">
            <OutlinedButton
              className={"border-primary text-primary border-2 text-lg w-44"}
              text={"Portfolio"}
            />
          </div>
          {/* view more button */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
