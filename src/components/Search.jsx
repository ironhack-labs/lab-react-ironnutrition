import React from "react";
import { Input } from "antd";

function Search({ onSearch }) {
  const handleInputChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    onSearch(searchTerm);
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <Input
        placeholder="Search for a food"
        onChange={handleInputChange}
        style={{ width: "100%" }}
      />
    </div>
  );
}

export default Search;
