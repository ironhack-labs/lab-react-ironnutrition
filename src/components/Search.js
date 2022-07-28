import { Divider, Input } from 'antd';
import { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");

  const handleFilter = (event) => {
    setSearch(event)

    props.updateFood(() => {
      const filteredFood = props.copy.filter(e => {
        return e.name.toLowerCase().includes(event.toLowerCase())
      })
      return filteredFood;
    });
  };

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={search} type="text" onChange={(e) => handleFilter(e.target.value)} />
    </>
  );
}

export default Search;
