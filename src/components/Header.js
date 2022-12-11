import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAsia } from "@fortawesome/free-solid-svg-icons";

export default function header() {
  return (
    <div className="header">
      <FontAwesomeIcon icon={faEarthAsia} className="earthIcon" />
      <h1>Travel Journal</h1>
    </div>
  );
}
