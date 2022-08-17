import {useState} from 'react'
import { Card, Row, Col, Divider, Input, Button } from 'antd';


function Search(props) {
    const {searchQuery} = props;
    const [query, setQuery] = useState('')

    const handleQuery = (e) => {
        console.log(query)
        setQuery(e.target.value);
        searchQuery(e.target.value);
      };

  return (
    <>
    <Divider>Search</Divider>

    <label>Search</label>
    <Input value={query} type="text" onChange={handleQuery} />
  </>
  )
}

export default Search