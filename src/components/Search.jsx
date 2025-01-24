import { Divider, Input } from "antd";
import { useState } from "react";

function Search({ handleSearch }) {
  const [keyWord, setKeyWord] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setKeyWord(value);
    handleSearch(value);
  };

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input name="search" value={keyWord} type="text" onChange={handleChange} />
    </>
  );
}

export default Search;
