import { Input } from 'antd';

function Search({ search }) {
  return (
    <div>
      <label>Search</label>
      <Input
        type="text"
        placeholder="Enter search query"
        onChange={(e) => search(e.target.value)}
      ></Input>
    </div>
  );
}

export default Search;
