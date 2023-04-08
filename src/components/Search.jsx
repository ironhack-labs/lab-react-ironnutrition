import { Divider, Input } from 'antd';

function Search({ search, onSearch }) {
  const handleChange = (ev) => {
    onSearch(ev.target.value);
  };

  return (
    <div>
      <Divider>Search</Divider>
      <div className="w-50 ms-5">
        <Input
          className="form form-control mb-3"
          type="text"
          placeholder="Search Food"
          value={search}
          onChange={handleChange}
        ></Input>
      </div>
    </div>
  );
}

export default Search;
