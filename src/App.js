//imports css
import { Row, Divider, Button } from 'antd';

import './App.css';
import AddFoodForm from './components/AddFoodForm';

import Search from './components/Search';
import foods from './foods.json';
import FoodBox from './components/FoodBox';


import { useState } from 'react';

function App() {
  const [list, setList] = useState(foods);
  const [listShowed, setListShowed] = useState(foods);


  const addFood = (product) => {
    const copy = [...list];
    copy.unshift(product);
    setList(copy);

    const copy2 = [...listShowed];
    copy2.unshift(product);
    setListShowed(copy2);
  }




  return (
    <div className="App">
      <Divider>Food List</Divider>
      
      <Button> Hide Form / Add New Food </Button>

      <AddFoodForm addFoods={addFood}/>

      <Search/>


      <Row style={{ width: '100%', justifyContent: 'center', display: 'flex', flexWrap: 'wrap'}}>
      {listShowed.map((eachElement, index) => {
        return <FoodBox key={eachElement.name + index} eachItem={eachElement} />;
      })}
      </Row>
    </div>
  );
}

export default App;
