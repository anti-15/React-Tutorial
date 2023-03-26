import { useState } from "react";

const Example = () => {
  const [selected, setSelected] = useState("Apple");
  const OPTIONS = ["Apple", "Banana", "Cherry"];
  const selectChange = (e) => {
    setSelected(e.target.value);
  }

  return (
    <>
      <select
        value={selected}
        onChange={selectChange}
      >
        {
          OPTIONS.map(option => 
            <option key={option} value={option}>
              {option}
            </option>
          )
        }
      </select>
      <h3>選択された果実：{ selected }</h3>
    </>
  );
};

export default Example;
