import { useState } from "react";

const Counter = () => {
  console.log("only Counter rendering");

  const [count, setcount] = useState(0);
  const plusbutton = () => {
    setcount(count + 1);
  };

  return (
    <>
      count 상태 : {count} <br />
      <button onClick={plusbutton}>plus</button>
    </>
  );
};

export default Counter;
