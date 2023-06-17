import { Divider, Input } from "antd";

function Search(props) {
  const { query, handleFilterDatas } = props;

  const handleSearchInput = (e) => {
    handleFilterDatas(e.target.value);
  };

  return (
    <>
      <Divider style={{ color: "white" }}>Search</Divider>

      <label>Search Query</label>
      <Input name="search" value={query} type="text" onChange={handleSearchInput} />
    </>
  );
}

export default Search;
