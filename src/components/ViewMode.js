import React from "react";
import Card from "./Card";

export default function viewMode() {
  const exampleArr = [
    {
      imgName: "chitwan",
      country: "Nepal",
      title: "Chitwan",
      exactLocation: "GFM2+JXW, Sonepur 44200",
      start: "12 Jan, 2021",
      end: "24 Jan, 2021",
      desc: "Chitwan National Park is a preserved area in the Terai Lowlands of south-central Nepal, known for its biodiversity. Its dense forests and grassy plains are home to rare mammals like one-horned rhinos and Bengal tigers. ",
    },
  ];

  return (
    <div className="cardContainer">
      {exampleArr.map((data) => {
        return <Card {...data} />;
      })}
    </div>
  );
}
