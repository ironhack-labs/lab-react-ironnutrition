import { Divider, Input } from 'antd';

// Iteration 5
function Search({value, onChange}) {
  return (
    <div>
      <Divider>Search</Divider>

      {/* <Input value={undefined} type="text" onChange={() => {}} /> */}
      <Input id="search" name="search" value={value} onChange={onChange} />
    </div>
  );
}

export default Search;
