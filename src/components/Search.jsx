import { Divider, Input } from 'antd';

// Iteration 5
function Search(props) {
    const { onSearch } = props;
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={undefined} type="text" onChange={(event) => onSearch(event.target.value)} />
    </>
  );
}

export default Search;