import React from "react";
import GlobeSearch from "../../../assets/GlobeSearch";
import Phone from "../../../assets/Phone";
import Ai from "../../../assets/Ai";
import BlockChain from "../../../assets/BlockChain";
import Analytics from "../../../assets/Analytics";
import School from "../../../assets/School";
import Management from "../../../assets/Management";
import Link from "next/link";
import Button from "../../general/Button";
import OutlinedButton from "../../general/OutlinedButton";
import { useRouter } from "next/router";

const Skills = () => {
  return (
    <section className="py-14 bg-white" id={"services"}>
      <div className="flex flex-col items-center gap-2" data-aos="fade-up">
        <h4
          className={
            "lg:text-4xl md:text-3xl text-2xl text-secondary font-bold text-center"
          }
        >
          What we do
        </h4>

        <div className="rounded-full w-20 sm:w-24 lg:w-40 h-2 bg-primary" />
      </div>

      <h4
        className={
          "lg:text-4xl md:text-3xl sm:text-2xl text-xl text-secondary font-bold text-center my-6 w-full sm:w-[90%] lg:w-[80%] mx-auto leading-10 lg:leading-[50px] md:leading-[60px]"
        }
        data-aos="fade-up"
      >
        We’ve got the skills and workforce you <br /> can rely on to push your
        business to the next level
      </h4>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 md:w-[80vw] lg:w-[90vw] w-[90vw] mx-auto">
        <SkillItem
          className={` h-auto lg:min-h-[625px] `}
          icon={<GlobeSearch />}
          title={"Search engine optimization"}
          description={` We are the leading search engine optimization company in Kenya. With
          10+ years experience in search engine optimization, we have developed
          strategies to help our clients get more website visitors translating
          into more sales and revenue. Glitex equips you with top SEO strategies
          to ensure your business is easily discoverable by prospect clients.`}
          path={"/projects/seo"}
        />
        <SkillItem
          className={` h-auto lg:min-h-[625px] `}
          icon={<Phone />}
          title={"Mobile Applications "}
          path={"/mobile"}
          description={` We are the leading search engine optimization company in Kenya. With
          10+ years experience in search engine optimization, we have developed
          strategies to help our clients get more website visitors translating
          into more sales and revenue. Glitex equips you with top SEO strategies
          to ensure your business is easily discoverable by prospect clients.`}
        />
        <SkillItem
          className={` h-auto lg:min-h-[625px] `}
          icon={<Ai />}
          title={"AI & ML Development"}
          description={`Glitex helps small to large enterprises develop smart and intelligent products leveraging deep learning and machine learning technology. Our team is well versed with AI and ML tool kits.`}
        />
        <SkillItem
          className={` h-auto lg:min-h-[625px] `}
          icon={<Analytics />}
          title={"Predictive Analytics"}
          description={`Our team has the capability to create and deploy predictive analytics solutions that visualizes data and help you make better future decisions. Predictive analytics help you develop insights that give you competetive advantage in the industry you operate.`}
        />
        <SkillItem
          className={"row-span-2"}
          icon={<BlockChain />}
          title={"Blockchain development"}
          description={<Text />}
          path={"/projects/block-chain"}
        />
        <SkillItem
          className={` h-auto lg:min-h-[625px] `}
          icon={<Management />}
          title={"Management Information Systems"}
          description={<ManagementText />}
        />
        <SkillItem
          className={` h-auto lg:min-h-[625px] `}
          icon={<School />}
          title={"E-learning platform"}
          path={"/projects/e-learning"}
          description={`Glitex is well versed with designing and developing technology-based interactive learning solutions.Providing learning technologies , Including custome e-learning , mulit-device leaning, mobile learning and consulting for interactive e-learning curriculum design.`}
        />
        <SkillItem
          className={` h-auto lg:min-h-[625px] `}
          icon={<img src="/images/clients/Game.png" />}
          title={"Game Development"}
          description={<GameText />}
        />
      </div>
    </section>
  );
};

export default Skills;

const SkillItem = ({
  className,
  title,
  description,
  icon,
  path = "/",
  ...rest
}) => {
  const router = useRouter();

  return (
    // <Link href={path}>
    <div
      className={`p-4 sm:p-8 lg:p-10  border border-primary bg-[#FFC53F0F] rounded-lg ${className}`}
      {...rest}
      data-aos="fade-up"
    >
      {/* icon */}
      <div className="flex items-center py-5 md:py-10 flex-col gap-6 md:gap-12">
        <div className="w-28 h-28 flex items-center justify-center rounded-full bg-primary ">
          {icon}
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="lg:text-3xl sm:text-2xl text-xl font-bold">{title}</h3>

          <p className="md:text-base text-sm">{description}</p>

          <OutlinedButton
            text={"View Services"}
            className={"mt-2 w-2/3 mx-auto"}
            handleClick={() => router.push(path)}
          />
        </div>
      </div>
    </div>
    // </Link>
  );
};

const Text = () => (
  <p>
    Being one of the top software development company in the region (can we
    mention region also like Nairobi, Kenya, Ethiopia, A cross East Africa &
    across the globe), we have established a team of experts to take care of our
    clients blockchain needs. Having developed a framework of blockchain
    services which successfully takes artificial intelligence , data analysis,
    IoT and web security we can confidently guarantee top quality products for
    our clients.
    <br />
    <br /> We offer products on ;<br /> 1. Hyperledgers
    <br /> 2. Smart contract developemnt
    <br /> 3. Crypto currency wallets.
    <br /> 4. NFT marketplaces
    <br /> 5. Side-chain development
    <br /> 6. DeFi solutions
    <br /> 7. Chain analysis
    <br /> 8. Fiat payment on-off Ramps.
    <br /> 9. Hybrid on-off chain systems
  </p>
);

const ManagementText = () => (
  <p>
    We pride ourselves in delivering end to end Information systems , ranging
    form- <br />
    1. Healthcare management systems, <br />
    2. School management systems, <br />
    3. Sacco management systems <br />
    4. ERP systems for both SMEs and Micro businesses.
    <br />
    5. Insurance Management systems. <br />
  </p>
);

const GameText = () => (
  <p>
    Together we lead your project through all stages from game design to
    post-release support, using the extensive experience and creativity of our
    experts.
    <br />
    <strong>
      <li className="px-3">PC </li>
    </strong>
    We design and develop end-to-end games for personal computers with porting
    to windows and MacOS.
    <br />
    <strong>
      <li className="px-3">Mobile </li>
    </strong>
    We create games for iOS and android plaftorms or cross-platform development.
  </p>
);
