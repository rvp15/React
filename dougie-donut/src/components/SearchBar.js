import React from "react";
import { useState } from "react";

function SearchBar({getLocation})
 {
  let [locationName, setLocationName] = useState("");
  let [number, setNumber] = useState(0);
  console.log(number)

  const handleChage = (e) => {
    setNumber(e.target.value);
  };
  const handlelocation = (e) => {
    setLocationName(e.target.value);
    getLocation(locationName,number)
  };
   
  console.log(locationName);

  return (
    <div> <div className='header'>
      <label htmlFor="number"># of Compliants:</label>
        <input type="text" id="number" value={number} onChange={handleChage} />
    </div>
      <br /> <br />
      <div className="buttons">
        <button className="btn" id="locationName" value='BROOKLYN' onClick={handlelocation}>
          BROOKLYN
        </button>
        <button className="btn"  id="locationName" value='MANHATTAN' onClick={handlelocation}>
          MANHATTAN
        </button>
        <button className="btn"  id="locationName" value='QUEENS'onClick={handlelocation}>
          QUEENS
        </button>
        <button className="btn"  id="locationName" value='BRONX' onClick={handlelocation}>
          BRONX 
        </button>
        <button className="btn"  id="locationName" value='STATEN ISLAND' onClick={handlelocation}>
          STATEN ISLAND
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
