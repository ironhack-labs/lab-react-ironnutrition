// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';

// Iteration 5
function Search({ searchString, setSearchString }) {
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        value={searchString}
        type="text"
        onChange={(e) => {
          setSearchString(e.target.value);
        }}
      />
    </>
  );
}

export default Search;
