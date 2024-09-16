import { Divider, Input } from "antd";

export default function Search({ searchTerm, handleSearch }) {
  return (
    <>
      <Divider>Search</Divider>
      <Input
        name="search"
        type="text"
        value={searchTerm}
        onChange={handleSearch}
      />
    </>
  );
}
