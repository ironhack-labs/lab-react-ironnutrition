import { Divider, Input } from 'antd';

// Iteration 5
function Searchbar({ search, onSearch }) {
  return (
    <>
      <Divider>Search</Divider>

      <label></label>
      <Input
        placeholder="Your search here"
        value={search}
        type="text"
        onChange={onSearch}
      />
    </>
  );
}

export default Searchbar;
