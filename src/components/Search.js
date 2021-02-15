import { Input } from 'antd';
import React from 'react';

const { Search } = Input;
    const handleSearch = (value) => console.log(value);

function SearchField({searchTerm, setSearchTerm}) {
    const handleSearch = e =>{
        setSearchTerm(e.target.value)
    }
    return (
      <div>
        <Search
          placeholder="input search text"
          onChange={handleSearch}
          style={{ width: 600 }}
        />
      </div>
    );
}

export default SearchField
