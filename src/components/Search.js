import { Divider, Input } from 'antd';

// Iteration 5
function Search(props) {
  const { search, updateSearch } = props;

  return (
    <div style={{ width: '30%' }}>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={search} type="text" onChange={updateSearch} />
    </div>
  );
}

export default Search;
