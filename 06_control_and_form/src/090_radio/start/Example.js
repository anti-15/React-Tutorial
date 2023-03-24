import { useState } from "react";

const Example = () => {
  const [radioVal, SetradioVal] = useState('Apple');
  // const onChange = (e) => SetradioVal(e.target.value);

  const RADIO_COLLECTION = ['Apple', 'Banana', 'Cherry'];
  return (
    <>
      {RADIO_COLLECTION.map((value) => {
        return (
          <label key = {value}>
            <input
              type="radio"
              value={value}
              checked={radioVal === value}
              onChange={(e) => SetradioVal(e.target.value)}
            />
            {value}
          </label>
        );
      })}
      <h3>私は{radioVal}が食べたいです</h3>
    </>
  );
};

export default Example;
