import React, { useState } from 'react';

function useCounter() {
  const [count, setCount] = useState(0);

  return {
    count,
    increment() {
      setCount(count + 1);
    },
    decrement() {
      setCount(count - 1);
    }
  };
}

export function CounterWithUseStateCustom() {
  const { count, increment, decrement } = useCounter(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
