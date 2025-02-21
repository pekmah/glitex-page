import React from "react";

export default function Carousel(props) {
  return (
    <section
      className={"flex min-h-[50vh] md:min-h-[75vh] relative overflow-hidden"}
    >
      <img
        className={" object-cover  "}
        src="/images/ai/ai-carousel-bg.webp"
        alt="bg_logo"
      />

      <img
        className={" object-contain absolute inset-x-0 -bottom-14"}
        src="/images/ai/floater.png"
        alt="bg_logo"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="">
          <h1 className="h3 text-white font-tinos text-2xl text-wrap md:text-4xl lg:text-5xl text-center w-11/12 leading sm:w-auto mx-auto">
            Ai Companies in Kenya | Artificial Intelligence Companies in Kenya
          </h1>
          <p className=" text-white tracking-wide w-full md:w-8/12  my-8 text-base sm:text-lg md:text-xl text-wrap text-center leading m:w-auto mx-auto">
            In search of Artificial Intelligent (AI) company in Nairobi, Kenya
            or across the globe? We leverage ML and AI to build AI- Native
            solutions or Integrate AI into your existing business
          </p>

          <div className="flex mt-12 md:mt-28 px-5 md:px-10 flex-wrap gap-y-3">
            {stats?.map(({ title, value }, ind) => (
              <div key={ind} className="flex-1 flex items-center">
                <h3 className="min-w-12 text-c-yellow text-3xl md:text-5xl xl:text-6xl mr-3">
                  {value}
                </h3>

                <div
                  className="font-lato font-semibold tracking-wide text-base lg:text-lg text-white"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*  image container   */}
      <div className={"flex-1 pt-0 center relative h-auto"}>
        {/*bg logo*/}

        {props?.imageUrl && (
          <img
            src={props?.imageUrl}
            alt="bg_logo"
            className={"absolute inset-0 h-full mx-auto object-contain"}
          />
        )}
      </div>
    </section>
  );
}

const stats = [
  {
    title: `Completed <br/> Projects`,
    value: "100+",
  },
  {
    title: `Inhouse <br/> AI Experts`,
    value: "13",
  },
  {
    title: `Experienced <br/> Industries`,
    value: "24",
  },
];
