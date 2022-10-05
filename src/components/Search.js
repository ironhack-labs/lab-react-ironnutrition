import { Divider, Input } from 'antd';

function Search(props) {
  function handleChange(e) {
    const { value } = e.target;
    props.search(value);
  }
  return (
    <>
      <Divider>Search</Divider>

      <Input
        type="text"
        name="searchFood"
        placeholder="Enter food to search"
        onChange={handleChange}
      />
    </>
  );
}

export default Search;
