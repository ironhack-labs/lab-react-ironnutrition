import { Divider, Input } from "antd";

// Iteration 5
function Search({ searchValue, setSearchValue }) {
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        value={searchValue}
        type="text"
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </>
  );
}

export default Search;
