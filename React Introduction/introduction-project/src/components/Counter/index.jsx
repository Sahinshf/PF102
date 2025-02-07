import React, { useState } from "react";

const Counter = ({ count, setCount }) => {
  const handleDecrement = () => {
    setCount((count = count - 1));
  };
  const handleIncrement = () => {
    setCount((count = count + 1));
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter;
