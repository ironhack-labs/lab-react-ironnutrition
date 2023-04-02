import { Divider, Input } from 'antd';

// Iteration 5
function Search({ onSearch, search }) {

  const handleChange = (event) => {
    const { value } = event.target
    onSearch(value)
  }

  return (
    <>
      <Divider>Search</Divider>
      <Input value={search} type="text" onChange={handleChange} placeholder="Enter Search query" />
    </>
  );
}

export default Search;