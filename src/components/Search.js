import { Input } from 'antd';

function SearchBar(props) {
  const { searchFood, foodSearch } = props;

  return (
    <Input
      type="text"
      placeholder="Search for a food item"
      value={searchFood}
      onChange={foodSearch}
      style={{ marginBottom: '10px' }}
    />
  );
}

export default SearchBar;