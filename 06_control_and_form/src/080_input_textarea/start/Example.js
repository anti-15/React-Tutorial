import { useState } from "react";

const Example = () => {
  const [val, setVal] = useState("");
  const clear = () => setVal("");
  return (
    <>
      <label htmlFor="123">ラベル</label>
      <br />

      <input
        type="text"
        id="123"
        placeholder="こんにちは"
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />

      <textarea
        name=""
        id="123"
        placeholder="こんにちは"
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
      <h3>{val}</h3>
      <button onClick={clear}>クリア</button>
    </>
  );
};

export default Example;
