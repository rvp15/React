import React, { useState } from "react";

function PurchaseButton({ data, removeFunc }) {
  const handlePurchase = (e) => {
    removeFunc(data);
  };
  return (
    <div>
      <h3>
        {" "}
        <button onClick={handlePurchase}>Check as Purchased</button>
      </h3>
    </div>
  );
}

export default PurchaseButton;
