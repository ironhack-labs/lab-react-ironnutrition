import React from "react";
import { Divider, Input } from "antd";

function Search({ value, handleSearch }) {
  return (
    <>
      <Divider>Search</Divider>

      <label id="search">
        Search
        <Input
          name="search"
          value={value}
          type="text"
          onChange={handleSearch}
        />
      </label>
    </>
  );
}

export default Search;
