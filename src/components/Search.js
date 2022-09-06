import { Divider, Input } from 'antd';
const Search = (props) => {
  return (
    <div className='flex'>
      <div className='input-search'>

        <Divider>Search</Divider>

        <label>Search</label>
        <Input type="text" placeholder='Enter search query' onChange={(e) => props.search(e.target.value)} />

      </div>
    </div>
  );
}

export default Search;
