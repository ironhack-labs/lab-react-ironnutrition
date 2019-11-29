import React from "react";

export default function SearchBar({ clbk }) {
  return (
    <form id="form">
      <label>Search</label>
      <input onChange={clbk} name="query" type="text" />
    </form>
  );
}
