import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";

export default function card(props) {
  return (
    <div className="card">
      {props.imgName === undefined && (
        <div className="imgDiv">
          <img src={`./images/soon.png`} alt="" />
        </div>
      )}
      {props.imgName !== undefined && (
        <div className="imgDiv">
          <img src={`./images/${props.imgName}.png`} alt="" />
        </div>
      )}
      <div className="travelInfo">
        <div className="location">
          <FontAwesomeIcon icon={faLocation} />
          <span id="country">{props.country}</span>
          <a href="">View on Google Maps</a>
        </div>
        <span id="title">{props.title}</span>
        <span id="date">
          {props.start} - {props.end}
        </span>
        <span id="desc">{props.desc}</span>
      </div>
    </div>
  );
}
