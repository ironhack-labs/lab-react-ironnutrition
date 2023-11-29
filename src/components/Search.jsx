import { Input } from "antd";

const Search = ({ onSearch }) => {
  const handleSearch = (value) => {
    onSearch(value);
  };

  return (
    <Input.Search
      placeholder="Search foods"
      onSearch={handleSearch}
      enterButton
    />
  );
};

export default Search;