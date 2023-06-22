import { Row,Button, Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 5
function Search(props) {
  const [search, setSearch] = useState('');

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // avoid page refresh

    props.callbackToSearch(search);

    setSearch('');
  };

  return (
    <>
      <form className="search" onSubmit={handleSubmit}>
        <Divider>Search</Divider>
        <Row justify={'center'}>
          <label style={{ width: '7vw' }}>Search</label>
          <Input
            style={{ maxWidth: '50vw' }}
            value={search}
            type="search"
            onChange={handleInput}
          />

          <Button type="primary" htmlType="submit">
            Search
          </Button>
        </Row>
      </form>
    </>
  );
}

export default Search;
