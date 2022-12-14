import React from "react";

export default function AddMode(props) {
  console.log(props);
  const journalObj = {
    country: "",
    title: "",
    exactLocation: "",
    start: "",
    end: "",
    desc: "",
  };

  const handleAdd = () => {
    props.addJournal(journalObj);
  };

  const handleTitleChange = (e) => {
    journalObj.title = e.target.value;
  };

  const handleCountryChange = (e) => {
    journalObj.country = e.target.value;
  };

  const handleLocationChange = (e) => {
    journalObj.exactLocation = e.target.value;
  };

  const handleStartChange = (e) => {
    journalObj.start = e.target.value;
  };

  const handleEndChange = (e) => {
    journalObj.end = e.target.value;
  };

  const handleDescChange = (e) => {
    journalObj.desc = e.target.value;
  };
  return (
    <>
      <form className="addForm">
        <div className="titleDiv set">
          <label htmlFor="fTitle">Title</label>
          <input
            type="text"
            placeholder="Title for journal"
            id="fTitle"
            onChange={handleTitleChange}
          />
        </div>
        <div className="locationDiv row">
          <div className="countryDiv set">
            <label htmlFor="fCountry">Country</label>
            <input
              type="text"
              placeholder="Situated Country"
              className="countryInput"
              id="fCountry"
              onChange={handleCountryChange}
            />
          </div>
          <div className="googleDiv set">
            <label htmlFor="fGoogle">Google Map</label>
            <input
              type="text"
              placeholder="Google map location"
              className="googleInput"
              id="fGoogle"
              onChange={handleLocationChange}
            />
          </div>
        </div>
        <div className="fileDiv set">
          <label htmlFor="file">Image</label>
          <input type="file" id="file" accept=".jpg, .jpeg, .png" />
        </div>
        <div className="dateDiv row">
          <div className="startDiv set">
            <label htmlFor="fStart">Start Date</label>
            <input
              type="date"
              id="fStart"
              className="dateInput"
              onChange={handleStartChange}
            />
          </div>
          <div className="endDiv set">
            <label htmlFor="fEnd">End Date</label>
            <input
              type="date"
              id="fEnd"
              className="dateInput"
              onChange={handleEndChange}
            />
          </div>
        </div>
        <div className="descDiv set">
          <label htmlFor="fDesc">Description</label>
          <input
            type="text"
            placeholder="Description"
            id="fDesc"
            onChange={handleDescChange}
          />
        </div>
        <div className="buttonDiv">
          <button type="button" className="addBtn" onClick={handleAdd}>
            Add Journal
          </button>
          <button type="button" className="clearBtn">
            Clear
          </button>
        </div>
      </form>
    </>
  );
}
