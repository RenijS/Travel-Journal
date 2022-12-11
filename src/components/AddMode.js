import React from "react";

export default function AddMode() {
  return (
    <>
      <form className="addForm">
        <div className="titleDiv set">
          <span>Title</span>
          <input type="text" placeholder="Title for journal" />
        </div>
        <div className="locationDiv row">
          <div className="countryDiv set">
            <span>Country</span>
            <input
              type="text"
              placeholder="Situated Country"
              className="countryInput"
            />
          </div>
          <div className="googleDiv set">
            <span>Google Map</span>
            <input
              type="text"
              placeholder="Google map location"
              className="googleInput"
            />
          </div>
        </div>
        <div className="dateDiv row">
          <div className="startDiv set">
            <span>Start Date</span>
            <input type="date" />
          </div>
          <div className="endDiv set">
            <span>End Date</span>
            <input type="date" />
          </div>
        </div>
        <div className="descDiv set">
          <span>Description</span>
          <input type="text" placeholder="Description" />
        </div>
      </form>
    </>
  );
}
