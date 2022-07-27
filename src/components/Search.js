import { Divider, Input } from 'antd';

function Search({name}){
    return (
        <>
          <Divider>Search</Divider>
    
          <label>Search</label>
          <Input value={name} type="text" onChange={() => {}} />
        </>
      );
}
export default Search;