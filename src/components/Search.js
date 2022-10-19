import { Card, Row, Col, Divider, Input, Button } from 'antd';

function Search({ callbackToSearch }) {
  return (
    <div>
      <Col>
        <Divider>Search</Divider>
        <Input
          placeholder="Enter search query"
          type="text"
          onChange={(e) => {
            callbackToSearch(e.target.value);
          }}
        />
      </Col>
    </div>
  );
}

export default Search;
