import React, { useState, useRef, useEffect } from "react";

function AddItemForm({ addNewItem }) {

  const itemRef = useRef();
  const brandRef = useRef();
  const unitsRef = useRef();
  const quantityRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      item: itemRef.current.value,
      brand: brandRef.current.value,
      units: unitsRef.current.value,
      quantity: quantityRef.current.value,
    };
    //setForm(newForm);
    addNewItem(newItem);
  };

  useEffect(() => {
    //once an item is added, empty the values!!!    
    itemRef.current.value = "";
    brandRef.current.value = "";
    unitsRef.current.value = "";
    quantityRef.current.value = "";
    console.log('AddItemForm useEffect called...')
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Add a Item to List</h3>
        <div >
          <label htmlFor="item">
            Item :
          </label>
          <input type="text" id="item" ref={itemRef} />
        </div><br />

        <div>
          <label htmlFor="brand">
            Brand :
          </label>
          <input type="text" id="brand" ref={brandRef} />
        </div><br />

        <div>
          <label htmlFor="units">
            Units :
          </label>
          <input type="text" id="units" ref={unitsRef} />
        </div><br />

        <div>
          <label htmlFor="quantity">
            Quantity :
          </label>
          <input type="number" id="quantity" ref={quantityRef} />
        </div><br />

        <div>
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
}

AddItemForm.defaultProps = {

}

export default AddItemForm;
