import React, { useState, useEffect } from 'react';

export function CountDownWithUseEffect({ initialCount, interval }) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    if (count <= 0) {
      return;
    }

    const timerId = setInterval(() => {
      setCount(count - 1);
    }, interval);

    return () => {
      clearInterval(timerId);
    };
  });

  return <p>Count: {count}</p>;
}
