import React from "react";
import ViewMode from "./ViewMode";

export default function main() {
  return (
    <div className="mainContainer">
      <div className="buttonContainer">
        <button className="previewBtn">Preview Mode</button>
        <span> || </span>
        <button className="workingBtn active">Working Mode</button>
      </div>

      <ViewMode />
    </div>
  );
}
