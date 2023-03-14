import { useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount(count + 1);
  }

  const countDown = () => {
    setCount(count - 1);
  };

  const countReset = () => {
    setCount(0);
  }

  return (
    <>
      <p>現在のカウント数：{count}</p>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
      <button onClick={countReset}>リセット</button>
    </>
  )
};

export default Example;
