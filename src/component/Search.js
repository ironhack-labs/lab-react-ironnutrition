import { Button, Divider, Input } from 'antd';
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
      <form onSubmit={handleSubmit}>
        <Divider>Search</Divider>

        <label>Search</label>
        <Input value={search} type="search" onChange={handleInput} />

        <Button type="primary" htmlType="submit">
          Search
        </Button>
      </form>
    </>
  );
}

export default Search;
