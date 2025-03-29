import { Input } from "antd";

function SearchComponent({ onSearch }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <Input.Search
        placeholder="Search food..."
        allowClear
        onChange={(e) => onSearch(e.target.value)}
        style={{ width: 300 }}
      />
    </div>
  );
}

export default SearchComponent;
