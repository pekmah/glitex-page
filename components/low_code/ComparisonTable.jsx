import React from "react";
import { CODE_COMPARISONS } from "../../providers/low_code/Comparison";

const ComparisonTable = () => {
  const renderBorder = (index, isLast = false) => {
    switch (index) {
      case 0:
        if (isLast) {
          return "border-r border-b-0";
        } else return "border-b border-r";
      case 1:
        if (isLast) {
          return "border-r border-b-0";
        } else return "border-b border-r";
      case 2:
        if (isLast) {
          return "border-0";
        } else return "";

      default:
        return "";
    }
  };
  return (
    <div className={"max-w-screen overflow-scroll md:overflow-hidden"}>
      <table className={"mx-auto  md:w-3/4 mt-14 bg-white rounded-[30px]"}>
        <thead className={"flex"}>
          {CODE_COMPARISONS.header?.map((h, ind) => (
            <th
              key={ind}
              className={`flex-1 ${renderBorder(
                ind,
              )} min-w-40 border-primary text-center center text-primary text-base md:text-xl font-tinos font-bold py-2 md:py-7 p-0 `}
            >
              {h}
            </th>
          ))}
        </thead>

        <tbody>
          {Object.keys(CODE_COMPARISONS.body).map((row) => (
            <tr className={"flex"} key={row}>
              {CODE_COMPARISONS.body[row]?.map((r, ind) => (
                <td
                  key={ind}
                  className={`flex-1 ${renderBorder(
                    ind,
                    Object.keys(CODE_COMPARISONS.body).length === parseInt(row),
                  )} flex-shrink-0 border-primary text-center text-primary md:text-base text-sm min-w-40 font-lato py-1 md:py-8`}
                >
                  {r}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
