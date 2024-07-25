
import { Input } from "antd";

const Search = ({ onSearch }) => {
  return (
    <Input 
      placeholder="Search food..."
      onChange={(event) => onSearch(event.target.value)}
      style={{ marginBottom: 20, width: '100%' }}
    />
  );
};

export default Search;