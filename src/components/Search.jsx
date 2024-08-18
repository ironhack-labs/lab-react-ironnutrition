import { Divider, Input } from "antd";


function Search({searchTerm, onSearch}) {
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input name="search" value={searchTerm} type="text" onChange={(e) => onSearch(e.target.value)} />
    </>
  );
}

export default Search;
