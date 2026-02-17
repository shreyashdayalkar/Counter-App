import React from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  // let count = 0;
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    if (count !== 0) {
      setCount(count - 1);
    }
  }
  function reset() {
    setCount(0);
  }
  return (
    <div>
      return (
      <>
        <h1>Counter App</h1>
        <p>Count : {count}</p>
        <div className="btns">
          <button onClick={increment}>➕ Increment</button>
          <button onClick={decrement}>➖ Decrement</button>
          <button onClick={reset}>🔄️ Reset</button>
        </div>
      </>
    </div>
  );
};

export default Counter;
