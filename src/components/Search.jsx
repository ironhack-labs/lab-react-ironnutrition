import React from "react";
import { useState } from "react";
import { Divider, Input } from "antd";

export const Search = (props) => {
  const [searchText, setSearchText] = useState("");

  const searchTextHandler = (e) => {
    setSearchText(e.target.value);
    props.filterFood(e.target.value);
  };
  
  return (
    <>
      <Divider>Search</Divider>
      <label>Search</label>
      <Input value={searchText} type="text" onChange={searchTextHandler} />
    </>
  );
};
