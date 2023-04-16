import { Divider, Input } from 'antd';

function Searchbar({ search, onSearch }) {
  return (
    <>
      <Divider>Search</Divider>
      
      <Input
        placeholder="Search"
        value={search}
        type="text"
        onChange={onSearch}
      />
    </>
  );
}

export default Searchbar;