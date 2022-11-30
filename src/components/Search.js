import { Divider, Input } from 'antd';
import { useState } from 'react'

// Iteration 5
function Search(props) {
    const { searchFoods } = props
    const [search, setSearch] = useState('')

    const handleSeach = e => {
        setSearch(e.target.value)
        searchFoods(e.target.value)
    }

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={ search } type="text" onChange={ handleSeach } />
    </>
  );
}

export default Search;