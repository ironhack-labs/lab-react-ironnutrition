import { Divider, Input } from "antd";

function Search({ value, onChange }) {
  return (
    <>
      <Divider>Search</Divider>

      <Input
        placeholder="Search..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}

export default Search;
