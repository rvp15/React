import React from "react";
import { useParams } from "react-router-dom";
import data from "../data";

function EmployeePage() {
  const params = useParams();
  const name = params.name;

  let filteredData = data.find((item) => item.name === name);
  console.log(filteredData);
  console.log(filteredData.title);
  return (
    <div>
      <h1 className="emppgeh1">Employee</h1>
      <div className="emppag">
        <div>
          <img
            className="image1"
            src={`/images/${filteredData.image}`}
            alt=""
          />{" "}
        </div>
        <div>
          <h1>{useParams().name}</h1>
          <h3>{filteredData.title}</h3>
        </div>
      </div>
      <h3>Call Office</h3>
      <p> {filteredData.callOffice}</p> <hr />
      <h3>Call Mobile </h3>
      <p>{filteredData.callMobile}</p> <hr />
      <h3>SMS </h3>
      <p>{filteredData.sms}</p> <hr />
      <h3>Email </h3>
      <p>{filteredData.email}</p>
    </div>
  );
}

export default EmployeePage;
