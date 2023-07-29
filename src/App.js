// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Row, Divider, Button, Col } from 'antd';
import FoodBox from './components/FoodBox'
import foodData from './foods.json'
import { useState } from 'react';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foods, setFoods ] = useState(foodData);
  const [word, setWord] = useState('')
  
  const addFood = (newFood) => {
    setFoods(prevFoods => [ newFood, ...prevFoods])
  }

  const onSearch = (searchCriteria) => setWord(searchCriteria)

  return (
    <div className="App">
      {/* Display Add Food component here */}
      <Row justify={'center'}>
        <Col span={6}>
        <AddFoodForm addFood={addFood}/>
        <Button> Hide Form / Add New Food </Button>


      {/* Display Search component here */}
          <Search onSearch={onSearch}/>
        </Col>
      </Row>
      

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        {foods
        .filter(foodItem => foodItem.name.toLowerCase().includes(word.toLowerCase()))
        .map((food, i) => <FoodBox key={i} {...food}/>)
      }

      </Row>
    </div>
  );
}

export default App;
