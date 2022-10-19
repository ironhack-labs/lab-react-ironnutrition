import { Divider, Input } from 'antd';

// Iteration 5
function Search({ callbackSearch }) {
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        placeholder="Enter search query"
        type="text"
        onChange={(e) => {
          callbackSearch(e.target.value);
        }}
      />
    </>
  );
}

export default Search;
