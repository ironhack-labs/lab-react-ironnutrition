import React from "react";

export default function SearchBar({ filterFood }) {
  return (
    <div>
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label" htmlFor="search">
            Search
          </label>
        </div>
        <div className="field-body">
          <div className="field">
            <p className="control">
              <input className="input" type="text" id="search" placeholder="Type something" onChange={filterFood} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
