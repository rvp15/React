import React from "react";
import PurchaseButton from "./PurchaseButton";
// import { useContext } from "react";
// import { dataContext } from "../pages/Home";

function DisplayList({ data, removeFunc }) {
  // const data = useContext(dataContext)
  console.log(data.item);
  return (
    <div>
      <h3>Item: {data.item}</h3>
      <h3>Brand: {data.brand}</h3>
      <h3>Units: {data.units}</h3>
      <h3>Quantity: {data.quantity}</h3>
      <PurchaseButton data={data} removeFunc={removeFunc} />
    </div>
  );
}

export default DisplayList;
