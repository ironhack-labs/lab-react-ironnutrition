import { Divider, Input } from 'antd';

// Iteration 5
function Search({ search, onSearch }) {
  const handleChange = (ev) => {
    onSearch(ev.target.value);
  };

  return (
    <>
      <Divider>Search</Divider>

      <Input value={search} type="text" onChange={handleChange} />
    </>
  );
}

export default Search;