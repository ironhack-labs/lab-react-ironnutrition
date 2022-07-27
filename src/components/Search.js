// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import { useState } from 'react';
import foodArrDB from '../foods.json';

// Iteration 5
function Search(props) {
  const [name, setName] = useState('');

  const handleSearch = (e) => {
    props.setArr(() => {
      const resultArr = foodArrDB.filter((food) => {
        return food.name.toLocaleLowerCase().includes(e.target.value);
      });
      return resultArr;
    });
    // clear form
  };

  return (
    <>
      <Divider>Search</Divider>
      <form onChange={handleSearch}>
        <label>Search</label>
        <Input
          required
          type="text"
          name="name"
          value={name}
          placeholder="what are you looking for?"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </form>
    </>
  );
}

export default Search;
