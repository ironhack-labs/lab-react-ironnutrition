import { Divider, Input } from 'antd';

// Iteration 5
function SearchBar(props) {

  function handleChangeSearch(event) {
    const newVal = event.target.value
    props.setSearch(newVal)
  }

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={props.search} type="text" onChange={handleChangeSearch} />
    </>
  );
}

export default SearchBar;