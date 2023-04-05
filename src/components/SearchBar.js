import { Input } from 'antd';

function SearchBar(props) {
  const { searchTerm, handleSearch } = props;

  return (
    <Input
      type="text"
      placeholder="Search for a food item"
      value={searchTerm}
      onChange={handleSearch}
      style={{ marginBottom: '10px' }}
    />
  );
}

export default SearchBar;
