import { Divider, Input } from 'antd';

function Search({ onSearch, search }) {
  const handleChange = (event) => {
    const { value } = event.target
    onSearch(value)
  }

  return (
    <>
      <Divider>Search</Divider>
      <Input value={search} type="text" onChange={handleChange} placeholder="Search" />
    </>
  );
}

export default Search;