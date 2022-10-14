import { useState } from "react"; //Importing useState hook from react
export default function Counter(props) {
  // console.log('useState:',useState)
  // ƒ useState(initialState) {
  //     var dispatcher = resolveDispatcher();
  //     return dispatcher.useState(initialState);
  //   }
  //     const countState = useState(0)//bracket had initial value=0
  //     //countState will be having array of 2 value 1.initial value(0), 2. a function to update state
  //    //1.set initialvalue to count
  //     let count = countState[0]
  //     //2.function- to change the state

  //     let setCount = countState[1]

  //Destructuring the array
  let [count, setCount] = useState(0);
  const handleIncreament = () => {
    setCount(count + 1);
  };
  const handleDecreament = () => {
    setCount(count - 1);
  };

  let [num, setNum] = useState(20);
  const handleMultiply = () => {
    setNum(num * 2);
  };
  const handleDivide = () => {
    setNum(num / 2);
  };

  return (
    <div className="counter1">
      <span>Current Count: {count}</span>
      <section>
        <button onClick={handleDecreament}>-</button>
        <button onClick={handleIncreament}>+</button>
      </section>

      <span> Number: {num}</span>

      <section>
        <button onClick={handleMultiply}>*2</button>
        <button onClick={handleDivide}>/2</button>
      </section>
    </div>
  );
}
