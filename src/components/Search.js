import { Divider, Input } from 'antd';
const Search = (props) => {
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input type="text" onChange={(e)=> props.search(e.target.value)} />
    </>
  );
}

export default Search;
