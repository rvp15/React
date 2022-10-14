
import EmployeeListItem from "./EmployeeListItem";
import data from "../data";

function EmployeeList() {
  return (
    <div>
      <ul>
        {data.map((emp, i) => {
          return (
            <li key={i} className="list">
           
                <EmployeeListItem whichEmployee={emp}/ >
              {console.log(i)}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default EmployeeList;
