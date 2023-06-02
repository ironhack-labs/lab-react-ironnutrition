import { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';

function Search(props) {
  const [search, setSearch] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearchInput = (e) => {
    setSearch(e.target.value);

    props.filterFood(e.target.value);
  };

  return (
    <div className="searchBar">
      <form onSubmit={handleSubmit}>
        <label>Search:</label>
        <Input
          type="text"
          name="search"
          value={search}
          onChange={handleSearchInput}
        ></Input>

        <Button type="primary" htmlType="submit">
          Search
        </Button>
      </form>
    </div>
  );
}

export default Search;
