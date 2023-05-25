import {Divider, Input} from 'antd'
import {useState} from 'react';

function Search(props) {
  let [searchFood, setSearchFood] = useState("");

  let handleSelect = (e) => {
    let inputSearch = e.target.value.toLowerCase()
    setSearchFood(inputSearch);
    props.search(inputSearch);
  };
  
  return (
    <div>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchFood} type="text" onChange={handleSelect}/>
    </div>
  );
}

export default Search;