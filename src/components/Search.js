import { Input } from 'antd';

// Iteration 5
function Search(props) {

  return (
    <form>
      <label>Search</label>
      <Input value={props.searchQuery} type="text" onChange={(e) => {props.setSearchQuery(e.target.value)}} />
    </form>
  );
}

export default Search;