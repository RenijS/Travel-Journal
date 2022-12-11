import React from "react";
import Card from "./Card";
import AddMode from "./AddMode";

export default function viewMode(props) {
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
    {
      imgName: "phoksundo",
      country: "Nepal",
      title: "Shey Phoksundo Lake",
      exactLocation: "Phoksundo 21400",
      start: "12 Jan, 2021",
      end: "24 Jan, 2021",
      desc: "Shey Phoksundo National Park is the largest and only trans-Himalayan national park in Nepal. It was established in 1984 and covers an area of 3,555 km² in the districts of Dolpa and Mugu in the Mid-Western Region, Nepal. The protected area ranges in elevation from 2,130 to 6,885 m.",
    },
    {
      imgName: "hakone",
      country: "Japan",
      title: "Hakone Open-Air Museum",
      exactLocation:
        "1121 Ninotaira, Hakone, Ashigarashimo District, Kanagawa 250-0407, Japan",
      start: "12 Jan, 2021",
      end: "24 Jan, 2021",
      desc: "The Hakone Open-Air Museum is Japan's first [open-air museum], opened in 1969 in Hakone in Ashigarashimo District, Kanagawa Prefecture, Japan. It has collections of artworks made by Picasso, Henry Moore, Taro Okamoto, Yasuo Mizui, Churyo Sato, Susumu Shingū, and many others, featuring over a thousand sculptures and works of art.",
    },
    {
      imgName: "ocean",
      country: "Australia",
      title: "The Twelve Apostles",
      exactLocation:
        "Great Ocean Rd & Booringa Rd, Princetown VIC 3269, Australia",
      start: "19th July, 2022",
      end: "19th July, 2022",
      desc: "The Twelve Apostles is a collection of limestone stacks off the shore of Port Campbell National Park, by the Great Ocean Road in Victoria, Australia. Their proximity to one another has made the site a popular tourist attraction. Seven of the original eight stacks remain standing at the Twelve Apostles viewpoint, after one collapsed in July 2005.",
    },
  ];

  return (
    <div className="cardContainer">
      {props.viewMode &&
        exampleArr.map((data) => {
          return <Card {...data} />;
        })}
      {!props.viewMode && <AddMode />}
    </div>
  );
}
