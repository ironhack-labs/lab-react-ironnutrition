import React from "react";
import { Input } from "antd";

const { Search } = Input;

function SearchBar(props) {
return (
<div>
<Search
placeholder="Search for food"
allowClear
value={props.searchTerm}
onChange={props.handleSearch}
style={{ width: 200 }}
/>
</div>
);
}

export default SearchBar;