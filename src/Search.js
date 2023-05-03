import React, { useState } from "react";
import { Input } from "antd";

function Search(props) {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (event) => {
    setSearchText(event.target.value);
    props.handleSearch(event.target.value);
  };

  return (
    <Input
      placeholder="Search for a food"
      value={searchText}
      onChange={handleSearch}
    />
  );
}

export default Search;
