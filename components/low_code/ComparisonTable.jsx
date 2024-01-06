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
    <table className={"mx-auto w-full md:w-3/4 mt-14 bg-white rounded-[30px]"}>
      <thead className={"flex"}>
        {CODE_COMPARISONS.header?.map((h, ind) => (
          <th
            key={ind}
            className={`flex-1 ${renderBorder(
              ind,
            )} border-primary text-center text-primary text-lg md:text-xl font-tinos font-bold py-7`}
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
                )} border-primary text-center text-primary text-base font-lato py-8`}
              >
                {r}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ComparisonTable;
