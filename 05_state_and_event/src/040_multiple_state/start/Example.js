import { useState } from "react";

const Example = () => {
  const [valA, setButtonA] = useState(0);
  const [valB, setButtonB] = useState(0);
  const [valC, setButtonC] = useState(0);
  return (
    <>
      <p>ボタンAが{valA}回押されました</p>
      <button
        onClick={() => {
          setButtonA(valA+1);
        }}
      >
        ボタンA
      </button>

      <p>ボタンBが{valB}回押されました</p>
      <button
        onClick={() => {
          setButtonB(valB+1);
        }}
      >
        ボタンB
      </button>

      <p>ボタンCが{valC}回押されました</p>
      <button
        onClick={() => {
          setButtonC(valC+1);
        }}
      >
        ボタンC
      </button>
    </>
  ); 
};

export default Example;
