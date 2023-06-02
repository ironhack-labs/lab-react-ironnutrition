import { Divider, Input } from 'antd';

function Search(props) {
  return (
    <div>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        type="text"
        name="search"
        value={props.search}
        onChange={props.onChange}
        placeholder="Enter search query"
      />
    </div>
  );
}

export default Search;
