import { useState } from "react"; //Importing useState hook from react
export default function Counter(props) {
  //Destructuring the array
  let [number, setNumber] = useState(0);
  let [num1, setNumber1] = useState(0)

  const handleChange = (e) => setNumber(e.target.value);

  const handleChange1 = (e) => setNumber1(e.target.value)

  const handleIncreament = () => setNumber(parseInt(number) + 1);//asynchronous function takes some time to update , so the code below will continue working and dont wait for this 

  const handleDecreament = () => setNumber(parseInt(number) - 1);

  const handleMultiply = () => setNumber(number * num1);

  const handleDivide = () => setNumber(number / num1);

  const handleReset = () => {
    setNumber(0);
    setNumber1(0);
  }

  return (
    <div className="input">
    
      <section>
      <h3>Input a number</h3>
        <input type="number" value={number} onChange={handleChange}></input> <br></br>
        <span>Output: {number} </span><br></br>
       
        <button onClick={handleDecreament}>-</button>
        <button onClick={handleIncreament}>+</button>
      </section>
   
        <input type='number' value={num1} onChange={handleChange1}></input> <br></br>
      <section>
        <button onClick={handleMultiply}>*</button>
        <button onClick={handleDivide}>/</button><br></br>
        <button style={{width:'80px'}} onClick={handleReset}>Reset</button>
      </section>
    </div>
  );
}
