import React from "react";
import { Link } from "react-router-dom";

function DisplayList({ datalist }) {
  return (
    <div>
      <ul className='list'>
        {datalist.map((item) => {
          return (
            <div>
              <li className="listcls" key={item.unique_key}>
                {" "}
                {item.complaint_type}
              </li>

              <Link to={`/details/${item.unique_key}`}>
                {" "}
                <button>Details</button>
              </Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default DisplayList;
