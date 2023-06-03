import './App.css';
import foods from './foods.json';
import { Row, Divider, Button } from 'antd';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodList, setFoodList] = useState(foods);

  const [search, setSearch] = useState('');

  const [newFood, setNewFood] = useState({
    name: '',
    image: '',
    calories: 0,
    servings: 0,
  });

  const [showForm, setShowForm] = useState(false);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleAddFood = (event) => {
    event.preventDefault();
    setFoodList([newFood, ...foodList]);
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setNewFood({ ...newFood, [name]: value });
  };

  const handleDelete = (index) => {
    const newFoodList = [...foodList];
    newFoodList.splice(index, 1);
    setFoodList(newFoodList);
  };

  const handleShowForm = () => {
    const newShowForm = showForm === 'none' ? 'block' : 'none';
    setShowForm(newShowForm);
  };

  return (
    <div className="App">
      <h1>IronNutrition</h1>
      <div style={{ display: showForm }}>
        <AddFoodForm
          name={newFood.name}
          image={newFood.image}
          calories={newFood.calories}
          servings={newFood.servings}
          onChange={handleFormChange}
          onAddFood={handleAddFood}
        />
      </div>
      <Button onClick={handleShowForm}>
        {showForm === 'none' ? 'Add new food' : 'Hide Form'}
      </Button>
      <Search search={search} onChange={handleSearch} />
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodList
          .filter((food) =>
            food.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((food, index) => (
            <FoodBox
              key={index}
              name={food.name}
              image={food.image}
              calories={food.calories}
              servings={food.servings}
              onDelete={() => handleDelete(index)}
            />
          ))}
      </Row>
    </div>
  );
}

export default App;
