import { Divider, Input } from "antd";

function Search({ filterFoods }) {
  return (
    <form className="SearchBar">
      <Divider>Search</Divider>
      <Input
        type="text"
        id="searchedText"
        name="searchedText"
        onChange={(e) => filterFoods(e.target.value)}
      />
    </form>
  );
}

export default Search;
