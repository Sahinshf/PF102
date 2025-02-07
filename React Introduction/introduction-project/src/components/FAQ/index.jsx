import React from "react";
import AccordionList from "../AccordionList";

const Faq = () => {
  return (
    <section
      style={{
        maxWidth: "800px",
        margin: "auto",
        backgroundColor: "black",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      <h2 style={{ textAlign: "center", color: "white" }}>
        Frequently Asked Questions
      </h2>

      <AccordionList />
    </section>
  );
};

export default Faq;
