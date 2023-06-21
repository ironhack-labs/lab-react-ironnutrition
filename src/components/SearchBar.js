import { Divider, Input, Row } from 'antd';
import { useState } from 'react';

const { Search } = Input;
// Iteration 5
export function SearchBar(props) {
  const [query, setQuery] = useState('');
  const handleSearch = (event) => {
    setQuery(event.target.value);
    props.searchByName(query);
  };

  return (
    <div>
      <Divider>Search</Divider>
      <Row justify={'center'}>
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="medium"
          value={query}
          onChange={handleSearch}
          style={{ maxWidth: '80vw', justifyContent: 'center' }}
        />
      </Row>
    </div>
  );
}
