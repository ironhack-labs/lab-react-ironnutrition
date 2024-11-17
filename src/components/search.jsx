import { Divider, Input } from 'antd'

function Search ({ onSearch }) {
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        name='search'
        type='text'
        onChange={e => onSearch(e.target.value)}
      />
    </>
  )
}

export default Search
