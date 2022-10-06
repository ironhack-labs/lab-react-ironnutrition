// import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.min.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import Search from './components/Search';

function App() {
  const [foodList, setFoodList] = useState([...foods]);
  const [filter, setFilter] = useState('');
  const [showForm, setShowForm] = useState(false);

  const oneFood = foodList
    .filter((food) => food.name.toLowerCase().includes(filter))
    .map((food) => {
      return (
        <Row key={food.name}>
          <FoodBox food={food} deleteFood={setFoodList} />
        </Row>
      );
    });

  return (
    <div className="App">
      {showForm ? <AddFoodForm addFood={setFoodList} /> : null}
      <Button type="primary" ghost onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Hide Form' : 'Add New Food'}
      </Button>

      <Search filterFood={setFilter} />
      <Divider>Food List</Divider>
      {foodList.length === 0 ? (
        <div>
          <h2>Opps! There is no more content to show.</h2>
          <img
            src="https://www.clipartmax.com/png/small/47-479052_empty-set-mathematical-symbol-comments-icono-vacio-png.png"
            alt="Empty Set Mathematical Symbol Comments - Icono Vacio Png @clipartmax.com"
          ></img>
        </div>
      ) : (
        <Row>{oneFood}</Row>
      )}
    </div>
  );
}

export default App;
