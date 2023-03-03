import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

function SearchBar({ searchHandler }) {
const handleSearch = (event) => {
    const query = event.target.value;
    searchHandler(query);
};

return (
    <Search
    placeholder="Search for food..."
    allowClear
    onChange={handleSearch}
    style={{ width: 200 }}
    />
);
}

export default SearchBar;
