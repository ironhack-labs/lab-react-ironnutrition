import { useState } from 'react'
import { Divider, Input } from 'antd';


function Searchbar(props) {
  const [query, setQuery] = useState('');
  const { filterFoods } = props

  const handleQuery = (e) => {
    setQuery(e.target.value);
    filterFoods(e.target.value);
  }
  return (
    <div style={{ width: 600 }}>
      <Divider>Search</Divider>
      <Input type="text" value={query} onChange={handleQuery} />
    </div>
  )
}

export default Searchbar