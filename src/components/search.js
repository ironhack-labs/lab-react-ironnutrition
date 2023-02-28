import { Input } from 'antd';

const Search = ({ handleSearch }) => {
  const handleChange = (e) => {
    handleSearch(e.target.value);
  };
  return (
    <Input
      placeholder="Search Foods"
      allowClear
      onChange={handleChange}
      style={{ width: 500 }}
    />
  );
};

export default Search;