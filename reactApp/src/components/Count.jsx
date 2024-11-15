import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(0);
  }
  return (
    <div>
      <h1>Count value is: {count}</h1>
      <button onClick={handleClick}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}
