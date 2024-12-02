import React, { useState } from "react";

interface CounterProps {
  id: number;
  removeCounter: (id: number) => void;
}

const Counter: React.FC<CounterProps> = ({ id, removeCounter }) => {
  const [count, setCount] = useState<number>(0);
  console.log("count: ", count);

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <h2>Counter id:{id}</h2>
      <div>
        <p>Count:{count}</p>
        <button className="btn" onClick={() => setCount(count + 1)}>
          Increament
        </button>
        <button className="btn" onClick={() => setCount(count - 1)}>
          Decreament
        </button>
        <button className="btn" onClick={resetCount}>
          Reset
        </button>
        <button className="btn" onClick={() => removeCounter(id)}>
          Remove Counter
        </button>
      </div>
    </div>
  );
};

export default Counter;
