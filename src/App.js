// import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.min.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { useState } from 'react';
import { Row, Divider } from 'antd';
import Search from './components/Search';

function App() {
  const [foodList, setFoodList] = useState([...foods]);
  const [filter, setFilter] = useState('');
  // console.log('Filter:', filter);

  const oneFood = foodList
    .filter((food) => food.name.toLowerCase().includes(filter))
    .map((food) => {
      return (
        <Row key={food.name}>
          <FoodBox food={food} />
        </Row>
      );
    });

  return (
    <div className="App">
      <AddFoodForm addFood={setFoodList} />
      <Search filterFood={setFilter} />
      <Divider>Food List</Divider>
      <Row>{oneFood}</Row>
    </div>
  );
}

export default App;
