import { Divider, Input } from 'antd';

function SearchBar({searchfFormState, handleOnChange}) {

    return (
      <div className="searchBar">
        <Divider>Search</Divider>
  
        <label>Search</label>
        <Input className='' value={searchfFormState} type="text" onChange={handleOnChange} />
      </div>
    );
  }

export default SearchBar