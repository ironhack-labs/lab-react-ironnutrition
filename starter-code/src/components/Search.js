import React from "react";

export default function Search({ handleSearch }) {
  return (
    <div>
      <input
        onChange={handleSearch}
        id="search"
        name="search"
        placeholder="Search"
        style={{ width: "100vw" }}
      />
    </div>
  );
}