import { useState } from "react";

const Example = () => {

  const numArray = [1, 2, 3, 4, 5];
  const [num, setNum] = useState(numArray);

  const shuffle = () => {
    const newNums = [...num];
    const value = newNums.pop();
    newNums.unshift(value);
    setNum(newNums);
  }
  return (
    <>
      <h1>{num}</h1>
      <button onClick={shuffle}>shuffle</button>
    </>
  );
};

export default Example;
