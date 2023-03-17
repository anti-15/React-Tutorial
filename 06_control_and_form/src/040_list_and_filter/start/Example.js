import { useState } from "react";

const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const [filterVal, setFileterVal] = useState("");


  return (
    <>
      <h3>配列のフィルター</h3>
      <input type="text" value={filterVal} onChange={(e) => setFileterVal(e.target.value)} />
      <ul>
        {animals
          .filter((animal) => animal.indexOf(filterVal) !== -1)
          .map((animal) => (
          <li key={animal}>{animal}</li>
          ))}
        {console.log(animals.filter((animal) => animal.indexOf(filterVal)))}
      </ul>
    </>
  );
};

export default Example;
