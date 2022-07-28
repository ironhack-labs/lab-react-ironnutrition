import { Divider, Input } from 'antd';
// Iteration 5

function Search(props) {
  return (
    <>
      <Divider>Search</Divider>

      <label htmlFor="search">Search</label>
      <Input
        id="search"
        placeholder="Enter food name here"
        value={props.searched}
        type="text"
        name="search"
        onChange={(e) => {
          props.setSearched(e.target.value);
          props.searchFoods(e.target.value);
        }}
      />
    </>
  );
}

export default Search;
