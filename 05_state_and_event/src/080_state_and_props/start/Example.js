import { useState } from "react";

const Example = () => {
  const [toggle, setToggle] = useState(true);
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  const toggleComponent = () => {
    setToggle(prev => !prev);
  }
  return (
    <>
      <button onClick={toggleComponent}>toggle</button>
      {toggle ? (
        <Count key="A" title="A" count={countA} setCoun={setCountA} />
      ) : (
        <Count key="B" title="B" count={countB} setCoun={setCountB} />
      )}
    </>
  );
}
const Count = ({ title, count, setCoun }) => {
  
  const countUp = () => {
    setCoun((prevstate) => prevstate + 1);
  };
  const countDown = () => {
    setCoun((prtate) => prtate - 1);
  };
  return (
    <>
      <h3>{title}: {count}</h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
