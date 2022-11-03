import { Divider, Input } from 'antd';

export function SearchBar({ searchValue, handleSearch }) {
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchValue} type="text" onChange={handleSearch} />
    </>
  );
}
