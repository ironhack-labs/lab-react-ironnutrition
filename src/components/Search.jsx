import { Divider, Input } from 'antd';

function Search(props) {
  const { search, onChange } = props;
  return (
    <div>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        type="text"
        name="search"
        value={search}
        onChange={onChange}
        placeholder="Enter search query"
      />
    </div>
  );
}

export default Search;
