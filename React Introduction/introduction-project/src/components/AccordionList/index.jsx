import React from "react";
import Accordion from "../Accordion";

const accordionItems = [
  {
    id: 1,
    text: "Is this a good product?",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
  },
  {
    id: 2,
    text: "Is this a good product??",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
  },
  {
    id: 3,
    text: "Is this a good product???",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
  },
  {
    id: 4,
    text: "Is this a good product????",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
  },
];

const AccordionList = () => {
  return (
    <div>
      {accordionItems.map((item) => (
        <Accordion
          key={item.id}
          text={item.text}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default AccordionList;
