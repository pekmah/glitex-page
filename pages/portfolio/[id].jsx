import { PortfolioViewHeader, PortfolioViewImages } from "../../components";
import React, { useMemo } from "react";

import Layout from "../../layout";
import { portfolioData } from "../../providers/projects/data";
import { useParams } from "next/navigation";

const View = () => {
  const [currentTab, setCurrentTab] = React.useState("mobile"); // mobile/admin
  // path name

  const handleSwitch = (tab) => {
    setCurrentTab(tab);
  };

  const params = useParams();

  const currentProject = useMemo(() => {
    if (params?.id) {
      return portfolioData[params?.id];
    } else {
      return null;
    }
  }, [params?.id]);
  return (
    <Layout>
      <PortfolioViewHeader
        description={currentProject?.description}
        title={currentProject?.title}
      />

      {/* nav */}
      {/* <PortfolioNav currentTab={currentTab} onSwitch={handleSwitch} /> */}
      {/* mobile images */}
      <PortfolioViewImages tab={currentTab} />
    </Layout>
  );
};

export default View;

// const PortfolioNav = ({ currentTab, onSwitch }) => (
//   <div className="container flex justify-center gap-5 mx-auto mb-10 border-b-4 border-gray-100 lg:gap-8 ">
//     {tabs.map(({ id, name }) => (
//       <PortfolioTab
//         key={id}
//         current={id.toLocaleLowerCase() === currentTab.toLocaleLowerCase()}
//         handleClick={() => onSwitch(id)}
//         text={name}
//       />
//     ))}
//   </div>
// );

// const PortfolioTab = ({ text, handleClick, current, className }) => (
//   <button
//     onClick={handleClick}
//     className={`text-primary relative -bottom-1 font-medium text-2xl font-tinos py-3 px-0 hover:font-[600] duration-300 ${current ? "font-[600]  border-b-4 border-primary" : "font-normal"} ${className}`}
//   >
//     {text}
//   </button>
// );

// const tabs = [
//   { id: "mobile", name: "Mobile App View" },
//   // {
//   //   id: "admin",
//   //   name: "Admin Dashboard",
//   // },
// ];
