import React from "react";
import EmployeeListItem from "./EmployeeListItem";
import data from "../data";

function EmployeeList() {
  return (
    <div>
      <ul className="eachemployeelist">
        {data.map((eachemp, i) => {
          return (
            <li key={i} className="list">
              <EmployeeListItem data={eachemp} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default EmployeeList;
