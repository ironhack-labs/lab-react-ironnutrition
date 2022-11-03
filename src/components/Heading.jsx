import AddFoodForm from './AddFoodForm';
import SearchBar from './SearchBar';

import { Collapse } from 'antd';
const { Panel } = Collapse;

function Heading({ setFood, addNewFood, handleSearch, searchInput }) {
  return (
    <>
      <Collapse accordion style={{ width: '35%', marginTop: '20px' }}>
        <Panel header="Add Food" key="1">
          <AddFoodForm {...{ setFood, addNewFood }} />
        </Panel>
        <Panel header="Search Food" key="2">
          <SearchBar {...{ handleSearch, searchInput }} />
        </Panel>
      </Collapse>
    </>
  );
}
export default Heading;
