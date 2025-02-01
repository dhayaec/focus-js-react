"use client";
import { useCallback, useState } from "react";

const { useMemo } = require("react");

const ExpensiveComponent = ({ calculateValue }) => {
  const memoizedValue = useMemo(() => calculateValue(), [calculateValue]);

  return <h1 className="text-4xl">{memoizedValue}</h1>;
};

export const Parent = () => {
  const [count, setCount] = useState(0);

  const calculateValue = useCallback(() => count + 2, [count]);

  return (
    <div className="flex flex-col items-center">
      <ExpensiveComponent calculateValue={calculateValue} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
