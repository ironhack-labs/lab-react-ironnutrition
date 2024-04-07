import './SearchBar.css';
import { Divider, Input } from 'antd';

function SearchBar({ onSearchBar }) {



  return (
    <section className='d-flex justify-content-center align-items-center'>
      <div className='w-50'>
        <Divider>Search</Divider>

        <label>Search</label>
        <Input name='search' type='text' onChange={onSearchBar}/>
      </div>
    </section>
  );
}

export default SearchBar;