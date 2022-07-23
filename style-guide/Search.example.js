// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';

// Iteration 5
function Search(props) {
  return (
    <>
      <Divider>Search</Divider>
      <div>
        <p> FOOD_NAME_HERE </p>
        <img src="FOOD_IMAGE_HERE" width={0} />
      </div>

      <label>Search</label>
      <Input value={undefined} type="text" onChange={() => { }} />
    </>
  );
}

export default Search;
