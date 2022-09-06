import { Divider, Input } from 'antd';

function Search({ search, setSearch }) {


  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={search} type="text" onChange={(ev) => { setSearch(ev.target.value)}} />
    </>
  );
}

export default Search;
