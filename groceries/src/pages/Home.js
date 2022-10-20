import React, { useEffect, useReducer } from "react";
// import { createContext } from "react";
import AddItemForm from "../components/AddItemForm";
import DisplayList from "../components/DisplayList";
import groceryitems from "../data";

// export const dataContext = createContext();
const reducer = (state, action) => {
  console.log(state);
  if (action.type === "DELETE") {
    let filteredArray = state.filter((item, i) => item.isPurchased === false);
    return filteredArray;
  } else if (action.type === "ADD") {
    return [...state, action.payload];
  }
};

function Home() {
  let [list, dispatch] = useReducer(reducer, groceryitems);
  ////////////////////////
  const removeFunc = (removeitem) => {
    removeitem.isPurchased = true;
    dispatch({ type: "DELETE", payload: removeitem });
  };

  //////////////////////
  const addNewItem = (form) => {
    dispatch({ type: "ADD", payload: form });
  };

  //////////////////////
  return (
    <div>
      <h1>HomePage</h1>
      <ul>
        {list.map((item, i) => {
          return !item.isPurchased ? (
            <li key={i}>
              <DisplayList data={item} removeFunc={removeFunc} />
            </li>
          ) : null;
        })}
      </ul>

      <AddItemForm addNewItem={addNewItem} />
    </div>
  );
}

export default Home;
