//imports css
import { Row, Divider, Button, Collapse } from 'antd';

import './App.css';
import AddFoodForm from './components/AddFoodForm';

import Search from './components/Search';
import foods from './foods.json';
import FoodBox from './components/FoodBox';


import { useState } from 'react';
const { Panel } = Collapse;


function App() {
  const [list, setList] = useState(foods);
  const [listShowed, setListShowed] = useState(foods);
  const [formIsShowing, setFormIsShowing] = useState(false)


  const addFood = (product) => {
    const copy = [...list];
    copy.unshift(product);
    setList(copy);

    const copy2 = [...listShowed];
    copy2.unshift(product);
    setListShowed(copy2);
 }

  const toggleForm = () => {
    setFormIsShowing(true);
    setFormIsShowing(!formIsShowing);
  };

  const filterList = (filterQuery)=>{
    const filterArr = list.filter((eachElement)=> {
      return eachElement.name.startsWith(filterQuery)
    })
    setListShowed(filterArr)
  }




  return (
    <div className="App">
      <Divider>Food List</Divider>
      
      

      <Collapse in={formIsShowing} onChange={toggleForm}>
          <Panel>
            <AddFoodForm addFoods={addFood}/>
          </Panel>
      </Collapse>

      <Search filterList = {filterList}/>


      <Row style={{ width: '100%', justifyContent: 'center', display: 'flex', flexWrap: 'wrap'}}>
      {listShowed.map((eachElement, index) => {
        return <FoodBox key={eachElement.name + index} eachItem={eachElement} />;
      })}
      </Row>
    </div>
  );
}

export default App;
