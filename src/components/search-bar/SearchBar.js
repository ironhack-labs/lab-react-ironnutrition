import { Input } from 'antd';

function SearchBar({ search, setSearch}) {
  return(
    <div>
      <label>Search</label>
      <Input value={search} type="text" onChange={(ev) => {setSearch(ev.target.value)}} />
    </div>
  )
}

export default SearchBar