import { Input, Button } from 'antd';
import { useState } from 'react';

export const Search = (props) => {
  const [search, setSearch] = useState('');
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(search)
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input value={search} onChange={handleChange} type="search"></Input>
      <Button htmlType="submit" type="primary">
        Search
      </Button>
    </form>
  );
};
