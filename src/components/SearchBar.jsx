import { Input } from 'antd';

function SearchBar({ handleSearch, searchInput }) {
  return (
    <>
      <Input onChange={handleSearch} value={searchInput} />
    </>
  );
}
export default SearchBar;
