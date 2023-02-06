import { Divider, Input } from 'antd';

function SearchBar(props){
    return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={undefined} type="text" onChange={(e) => props.onSearch(e.target.value)} />
    </>
  );

}

export default SearchBar;