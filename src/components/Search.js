import { Divider, Input, Col, Card } from 'antd';
import { useState } from 'react';

function Search(props) {
  const [inputText, setInputText] = useState('');

  let handleSearch = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
    props.search(lowerCase);
  };

  /* const handleSearch = (e) => {
    props.setQuery(e.target.value);
  }; */

  return (
    <Col>
      <Card style={{ width: 600, margin: 10 }}>
        <Divider>Search a food</Divider>

        <label>Search</label>
        <Input value={inputText} type="search" onChange={handleSearch} />
      </Card>
    </Col>
  );
}

export default Search;
