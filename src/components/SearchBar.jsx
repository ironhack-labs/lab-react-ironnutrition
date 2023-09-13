import { Divider, Input } from "antd";

function Search(props) {
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input name="search" type="text" onChange={(e) => {props.fnSearch(e.target.value)}} />
    </>
  );
}

export default Search;
