import React, { useState, useEffect } from 'react';

function useCountDown({ interval, initialCount }) {
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

  return {
    count
  };
}

export function CountDownWithUseEffectCustom({ initialCount, interval }) {
  const { count } = useCountDown({ interval, initialCount });

  return <p>Count: {count}</p>;
}
