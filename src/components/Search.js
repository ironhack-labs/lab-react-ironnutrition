import { Divider, Input } from 'antd';

// Iteration 5
function Search(props) {

    const { handleSearch } = props;

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input type="text" onChange={(e) => {handleSearch(e.target.value)}} />
    </>
  );
}

export default Search;
