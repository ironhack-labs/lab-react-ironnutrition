import { Divider, Input } from "antd";

function Search(props) {
  const { query, handleFilterDatas } = props;

  return (
    <>
      <Divider style={{ color: "white" }}>Search</Divider>

      <label>Search Query</label>
      <Input name="search" value={query} type="text" onChange={handleFilterDatas} />
    </>
  );
}

export default Search;
