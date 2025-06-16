import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={updateCount}>Increase</button>
    </>
  );
};

export default Counter;
