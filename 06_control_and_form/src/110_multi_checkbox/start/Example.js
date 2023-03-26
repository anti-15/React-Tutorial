import { useState } from "react";

const Example = () => {
  const [fruits, setFruits] = useState([
    { label: "Apple", value: 100, checked: false },
    { label: "Banana", value: 200, checked: false },
    { label: "Cherry", value: 300, checked: false },
  ]);

  const [sum, setSum] = useState(0);

  const handleChange = (e) => {
    // const newFruits = fruits.map((fruit) => {
    //   //stateは常に新しいオブジェクトを使うというお作法がある
    //   const newFruit = { ...fruit };
    //   if (newFruit.label === e.target.value) {
    //     newFruit.checked = !fruit.checked;
    //   }

    //   return newFruit;
    // });

    // let sumVal = 0;

    // newFruits.forEach((fruit) => {
    //   if (fruit.checked) {
    //     sumVal += fruit.value;
    //   }
    // })

    // setSum(sumVal);


    //配列コピーしないパターン
    const aaa = fruits.map((fruit) => {
      if (fruit.label === e.target.value) {
        fruit.checked = !fruit.checked;
      }
      return fruit;
    });

    setFruits(aaa);

    let sumVal = 0;
    aaa.forEach((fruit) => {
      if (fruit.checked) {
        sumVal += fruit.value;
      }
    })

    setSum(sumVal);
  }




  return (
    <div>
      {
        fruits.map((fruit) => {
          return (
            <div key={fruit.label}>
              <input
                id={fruit.value}
                type="checkbox"
                value={fruit.label}
                checked={fruit.checked}
                onChange={handleChange}
              />
              <label htmlFor={fruit.value}>
                {fruit.label}:{fruit.value}
              </label>
            </div>
          );        
        })
      }
      <div>合計：{sum}</div>
    </div>
  );
};

export default Example;
