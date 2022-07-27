import {useState} from "react";
import {Divider, Input} from 'antd';

function Search(props) {
    const [searchTerm, setSearchTerm] = useState("")

    return (
      <>
        <Divider>Search</Divider>
        <label>Search</label>
        <Input value={searchTerm} type="text" onChange={({target}) => {
            setSearchTerm(target.value)
            props.search(target.value)
        }} />
      </>
    );
  }
  
  export default Search;
  