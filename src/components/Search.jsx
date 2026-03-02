import { Divider, Input, Empty } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Search = ({ food, search, handleChange }) => {
  if (food.length === 0) {
    return <Empty description="No food found" />;
  }
  return (
    <div>
      <Divider>Search</Divider>
      <Input
        name="search"
        type="text"
        placeholder="Search foods"
        prefix={<SearchOutlined />}
        value={search}
        onChange={handleChange}
      />
    </div>
  );
};
export default Search;
