import { Divider, Input, Row, Card } from 'antd';
import { useState } from 'react';

function Search(props) {
  const [inputText, setInputText] = useState('');

  let handleSearch = (e) => {
    setInputText(e.target.value);
    props.search(e.target.value);
  };

  return (
    <Row style={{ justifyContent: 'center' }}>
      <Card style={{ width: '80%', margin: 10, backgroundColor: '#efefef' }}>
        <Divider>Search</Divider>

        <label>Search</label>
        <Input
          value={inputText}
          type="text"
          placeholder="Search for foods"
          onChange={handleSearch}
        />
      </Card>
    </Row>
  );
}

export default Search;
