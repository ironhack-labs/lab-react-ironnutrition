import './App.css';
import data from './foods.json';
import { Row, Divider } from 'antd';
import FoodBox from './componentes/FoodBox';
import Search from './componentes/Search';
import AddFood from './componentes/AddFood';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState('');
  const [foods, setFoods] = useState(data);

  const foodsToSearch = foods.filter((f) => f.name.includes(search));

  const onSearch = (value) => {
    setSearch(value);
  };

  const handleDelete = (name) => {
    setFoods((prevs) => {
      return prevs.filter((food) => food.name !== name);
    });
  };

  const addFood = (foodNew) => {
    setFoods([foodNew, ...foods]);
  };

  return (
    <div className="App">
      <AddFood addFood={addFood} />

      <Search search={search} onSearch={onSearch} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodsToSearch.map((food) => (
          <FoodBox
            key={food.name}
            food={food}
            onClickDelete={() => handleDelete(food.name)}
          />
        ))}
      </Row>
    </div>
  );
}

export default App;
