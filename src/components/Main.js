import React, { useState } from "react";
import ViewMode from "./ViewMode";

export default function Main() {
  const [viewMode, setMode] = useState(false);

  const viewClicked = () => {
    return setMode(true);
  };

  const addClicked = () => {
    return setMode(false);
  };

  return (
    <div className="mainContainer">
      <div className="buttonContainer">
        <button className="previewBtn" onClick={viewClicked}>
          Preview Mode
        </button>
        <span> || </span>
        <button className="workingBtn active" onClick={addClicked}>
          Working Mode
        </button>
      </div>

      <ViewMode viewMode={viewMode} />
    </div>
  );
}
