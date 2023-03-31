import { Divider, Input } from 'antd';

function SearchBar({ search, onSearch }) {

  const handleChange = (event) => {
    const { value } = event.target
    onSearch(value)
  }
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={search} type="text" onChange={handleChange} />
    </>
  );
}

export default SearchBar;