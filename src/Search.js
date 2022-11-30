import { Row, Col, Divider, Input } from 'antd';

const Search = (props) => {

  return (
    <div>
      <Row >
        <Col>
          <Divider>Search</Divider>
          <label htmlFor="name">Search</label>
          <Input type="text" value={props.input} onChange={props.handleSearch} required />
        </Col>
      </Row>
    </div>
  )
}

export default Search;
