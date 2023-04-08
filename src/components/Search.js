import { Divider, Input } from 'antd';

function Search(props) {

  const { searchQuery, setSearchQuery } = props

  return (
    <div id="search">
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={searchQuery} type="text" onChange={e => {setSearchQuery(e.target.value)}} />
    </div>
  );
}

export default Search;
