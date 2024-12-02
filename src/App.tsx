import React, { useEffect, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

interface CounterType {
  id: number;
}

const App: React.FC = () => {
  const [counters, setCounters] = useState<CounterType[]>([]);
  console.log("counters: ", counters);

  const addCounter = () => {
    setCounters([...counters, { id: Date.now() }]);
  };

  const removeCounter = (id: number) => {
    setCounters(counters.filter((counter) => counter.id !== id));
  };

  return (
    <div>
      <h2>Counter List</h2>
      <button onClick={addCounter}>Add Counter</button>
      <div>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            id={counter.id}
            removeCounter={removeCounter}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
