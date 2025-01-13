import React from "react";

export default function carousel(props) {
  return (
    <section
      className={"flex min-h-[50vh] md:min-h-[75vh] relative overflow-hidden"}
    >
      <img
        className={" object-cover  "}
        src="/images/ai/ai-carousel-bg.jpg"
        alt="bg_logo"
      />

      <img
        className={" object-contain absolute inset-x-0 -bottom-14"}
        src="/images/ai/floater.png"
        alt="bg_logo"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className=" lg:w-3/5 ">
          <h2 className="h3 text-white font-tinos text-2xl text-wrap md:text-4xl lg:text-5xl text-center leading w-9/12 sm:w-auto mx-auto">
            We leverage ML and AI to build AI- Native solutions or Integrate AI
            into your existing business
          </h2>

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
    value: "590",
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
