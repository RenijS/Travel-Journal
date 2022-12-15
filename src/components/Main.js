import React, { useState } from "react";
import ViewMode from "./ViewMode";

export default function Main() {
  const [viewMode, setMode] = useState(true);
  const [example, setExample] = useState(true);
  const [addedArr, setArr] = useState([]);

  const viewClicked = (e) => {
    setExample(false);
    return setMode(true);
  };

  const addClicked = () => {
    setExample(false);
    return setMode(false);
  };

  const exampleClicked = () => {
    return setExample(true);
  };

  const addJournal = (obj) => {
    setArr([...addedArr, { ...obj }]);
    console.log("Journal Added");
  };

  return (
    <div className="mainContainer">
      <div className="buttonContainer">
        <div className={viewMode ? "exampleDiv" : "exampleDiv displayNone"}>
          <button
            className="exampleBtn"
            onClick={exampleClicked}
            id={example ? "active" : ""}
          >
            Example Journal
          </button>
          <span>||</span>
        </div>
        <button
          className={viewMode ? "previewBtn previewMiddle" : "previewBtn"}
          onClick={viewClicked}
          id={viewMode && !example ? "active" : ""}
        >
          Preview Mode
        </button>
        <span>||</span>
        <button
          className="workingBtn active"
          onClick={addClicked}
          id={!viewMode && !example ? "active" : ""}
        >
          Working Mode
        </button>
      </div>

      <ViewMode
        viewMode={viewMode}
        example={example}
        addedArr={addedArr}
        addJournal={addJournal}
      />
    </div>
  );
}
