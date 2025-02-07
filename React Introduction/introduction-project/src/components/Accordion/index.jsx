import React from "react";
import { useState } from "react";

const Accordion = ({ text, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        color: "black",
        backgroundColor: "white",
        padding: "10px",
        margin: "10px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>{text}</p>
        <button onClick={handleClick}> {isOpen ? "-" : "+"} </button>
      </div>
      {isOpen && <div>{description}</div>}
    </div>
  );
};

export default Accordion;
