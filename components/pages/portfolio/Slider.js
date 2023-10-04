import Link from "next/link";
import React, {useState} from "react";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";
import OutlinedButton from "../../general/OutlinedButton";

const Slider = () => {
    const [current, setCurrent] = useState(0);
    const scrollLeft = (nxt) => {
        if (window.innerWidth < 500) {
            document.getElementById("content").scrollLeft -=
                window.innerWidth * 0.90 * Math.abs(nxt - current);
        } else {
            document.getElementById("content").scrollLeft -=
                window.innerWidth * 0.814643 * Math.abs(nxt - current);
        }
    };
    const scrollRight = (nxt) => {
        if (window.innerWidth < 500) {
            document.getElementById("content").scrollLeft +=
                window.innerWidth * 0.90 * Math.abs(nxt - current);
        } else {
            document.getElementById("content").scrollLeft +=
                window.innerWidth * 0.814643 * Math.abs(nxt - current);
        }
    };

    const handleScroll = (next_index) => {
        if (next_index < current) {
            // scroll left
            scrollLeft(next_index);
        } else if (next_index === current) {
            // scroll left
            return;
        } else {
            // scroll right
            scrollRight(next_index);
        }
        setCurrent(next_index);
    };

    return (
        <section id="portfolio" className="relative bg-white md:h-[700px] md:py-14">
            <h4
                className={
                    "lg:text-4xl md:text-3xl text-2xl text-secondary font-bold text-center my-3"
                }
            >
                Some of the work we have done
            </h4>
            <div
                id="content"
                className="carousel p-4 md:pl-20 flex items-center justify-start overflow-x-auto scroll-smooth no-scrollbar"
            >
                {scrollList?.map((item, i) => (
                    <div key={i}>
                        <Card title={item?.title} desc={item?.desc} imgs={item?.images} link={item?.link}
                              handleFocus={() => console.log("FOCUSED: ", item?.id)}/>
                    </div>
                ))}
            </div>

            <div className="flex mx-auto pb-3">
                <div className="mx-auto flex gap-3 items-center ">
                    <OutlinedButton
                        className={
                            "mr-3 border-2 h-9 md:h-12 w-9 md:w-12 flex items-center justify-center rounded-full"
                        }
                        style={{padding: "0px"}}
                        handleClick={() => handleScroll(current - 1)}
                    >
                        <FiChevronLeft className="text-2xl text-primary"/>
                    </OutlinedButton>

                    {scrollList?.map((item, i) => (
                        <button
                            key={i}

                            className={`rounded-full w-3.5 h-3.5 ${
                                i === current ? "bg-primary" : "border-[1.5px] border-primary"
                            }`}
                            onClick={() => handleScroll(i)}
                        />
                    ))}

                    <OutlinedButton
                        className={
                            "ml-3 border-2 h-9 md:h-12 w-9 md:w-12 flex items-center justify-center rounded-full"
                        }
                        style={{padding: "0px"}}
                        handleClick={() => handleScroll(current + 1)}
                    >
                        <FiChevronRight className="text-2xl text-primary"/>
                    </OutlinedButton>
                </div>
            </div>
        </section>
    );
};

export default Slider;

function Card({title, desc, imgs, link, handleFocus}) {
    return (
        <>
            <div className="card bg-primary w-[85vw] md:w-[80vw] m-2 rounded-lg px-5" onFocus={() => handleFocus()}>
                <div className="flex flex-col md:flex-row py-4">
                    {/* image div */}
                    <div className=" hidden md:flex items-center justify-center flex-1 gap-2">
                        {imgs?.map(img => (
                            <img
                                src={img}
                                alt="__"
                                className="max-h-[400px] w-auto h-auto rounded-xl"
                            />
                        ))}
                    </div>

                    <div className=" flex md:hidden items-center justify-center flex-1 gap-2">

                        <img
                            src={imgs[1]}
                            alt="__"
                            className="max-h-[400px] w-auto h-[50vh] md:h-auto rounded-xl"
                        />

                    </div>
                    {/* text description div */}
                    <div className="flex flex-col gap-2 md:gap-6 flex-1 justify-center">
                        <h5 className="text-xl md:text-3xl font-medium">{title}</h5>

                        {/* body */}
                        <p className="text-sm md:text-md md:w-5/6 h-[180px] overflow-hidden md:h-auto">
                            {desc}
                        </p>

                        <div className="flex">
                            <Link href={link}>
                                <OutlinedButton
                                    className={"border-secondary text-secondary border-2 text-sm md:text-lg"}
                                    text={"View more"}
                                />
                            </Link>
                        </div>

                        {/* view more button */}
                    </div>
                </div>
            </div>
        </>
    );
}

const scrollList = [{
    key: "item 1",
    id: "#okapy",
    images: ["/images/portfolio/imga.webp", "/images/portfolio/imgb.webp"],
    title: "Okapy Customer Application",
    desc: `Okapy Secure is a tech-driven end-to-end local and cross border goods transport platform for individuals and businesses. Okapy partners with retailers, manufacturers, suppliers, and startups to transport goods and shop directly from the U.S. stores and delivers to your door step.`,
    link: "/portfolio/okapy"

}, //okapy
    {
        key: "item 3",
        id: "#okapy-driver",
        images: ["/images/portfolio/okapy-driver-1.webp", "/images/portfolio/okapy-driver-2.webp"],
        title: "Okapy Secure Driver App",
        desc: `Okapy Secure is a tech-driven end-to-end cross border goods transport platform for individuals and businesses. Okapy partners with retailers, manufacturers, suppliers, and startups to transport goods at the touch of a button.`,
        link: "/portfolio/okapy-driver"
    }, //okapy driver
    {
        key: "item 2",
        id: "#golf",
        images: ["/images/portfolio/golf-1.webp", "/images/portfolio/golf-2.webp"],
        desc: `Muthaiga Golf Club, proudly called the Home of Golf by its elite membership, is in many ways the ultimate embodiment of Kenya’s unique marriage of ancient golf tradition and a modern 18-Hole Championship Golf Course.
  
     The Club boasts of a proud history spanning over a century providing prestigious and challenging courses in the region. In keeping up with its drive of providing exceptional services, the club seeks to provide members with ability to access club services such as booking Tee times, make Dining Reservations and even view their Statements through the MGC APP.
    `,
        title: "Muthaiga Golf Club Application",
        link: "/portfolio/golf"

    }, //golf
    {
        key: "item 4",
        id: "#joosmoo",
        images: ["/images/portfolio/joosmoo-1.webp", "/images/portfolio/joosmoo-2.webp"],
        title: "Joosmoo Application",
        desc: `JooSmoo LTD is a juice and nut milk company founded with the intent to provide pure, unadulterated, additive-free beverages and food products.Our company philosophy is – your food label content should do good to your body. Since our inception, we have done exactly that – created products using whole foods that nurture the body.
    We are the only company in Kenya that produces nut milks and our goal is to continue to grow our reach and distribution outlets. Our adherence to quality raw products enables us to consistently produce quality drinks and food items.`,
        link: "/portfolio/joosmoo"
    }, //joosmoo
    {
        key: "item 5",
        id: "#npbc",
        images: ["/images/portfolio/npbc-1.webp", "/images/portfolio/npbc-2.webp"],
        title: "NPBC",
        desc: `Login to your student, lecturer or administrator portal on NPBC`,
        link: "/portfolio/npbc"
    } //npbc
];
