import './App.css';
import foodsDataJSON from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import { Row, Divider, Button } from 'antd';
import AddFood from './components/AddFood'
import Search from './components/Search'


console.log(foodsDataJSON);

function App() {
const [foodsData, setFoodsData] = useState(foodsDataJSON);
  return (
    <div className="App">
    <AddFood />
    <Button>Create</Button>
    <Search />
    <Divider>Food List</Divider>
    <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
      {foodsData.map((food) => {
        return (
          <FoodBox food={food}/>
        );
      })}
      </Row>
    </div>
  )
    }

export default App
