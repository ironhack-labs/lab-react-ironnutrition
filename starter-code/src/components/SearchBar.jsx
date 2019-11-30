import React from "react";

export default function SearchBar({ clbk }) {
  return (
    <div className="foo">
      <div className="search-bar">
        <p>Search</p>
        <input
          className="input-group input"
          type="search"
          onChange={clbk}
          placeholder="search..."
        />
      </div>
    </div>
  );
}
