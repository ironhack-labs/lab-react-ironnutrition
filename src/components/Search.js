import { Divider, Input } from 'antd';

// Iteration 5
function Search(props) {

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={props.query} type="search" onChange={e => 
        {props.setQuery(e.target.value)}
      } />
    </>
  );
}

export default Search;
