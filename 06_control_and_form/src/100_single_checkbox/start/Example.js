import { useState } from "react";

const Example = () => {
  const [checkbox, setCheckbox] = useState(true);
  const check = () => setCheckbox(prev => !prev);
  return (
    <>
      <label htmlFor="">
        チェック：
        <input
          type="checkbox"
          checked={checkbox}
          onChange={check} />
      </label>
      <h3>{ checkbox ? "ON" : "OFF" }</h3>
    </>
  );
};

export default Example;
