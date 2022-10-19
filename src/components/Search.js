import { Divider, Input } from 'antd';

// Iteration 5
function Search({callbackToSearch}) {

   return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input 
        placeholder="Search by the title ..."
        type="text" 
        onChange={(e) => { 
            callbackToSearch(e.target.value);
        }}
      />
    </>
  );
}

export default Search;
