import { Input } from "antd";

function Search({ searchFood }) {
  return (
    <Input
      placeholder="Search food"
      onChange={(e) => searchFood(e.target.value)}
      style={{ marginBottom: 20 }}
    />
  );
}

export default Search;
