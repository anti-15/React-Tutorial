import { useState } from "react";

import AnimalFiter from "./components/AnimalFilter"
import AnimalList from "./components/AnimalList"

const Example = () => {
  const animals = ["Dog", "Cat", "Rat"];
  const [filterVal, setFilterVal] = useState("");

  const filterdAnimals = animals.filter((animal) => {
    const isMatch = animal.indexOf(filterVal) !== -1;
    return isMatch;
  })

  return (
    <>
      <AnimalFiter filterState = {[filterVal, setFilterVal]} />
      <AnimalList animals={filterdAnimals}/>
    </>
  );
};

export default Example;
