import { Divider } from 'antd';

function SearchBar({ search, setSearch }) {
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div>
      <Divider>Search</Divider>

      <label>
        Search Students:
        <input type="text" value={search} onChange={handleSearch} />
      </label>
    </div>
  );
}

export default SearchBar;
