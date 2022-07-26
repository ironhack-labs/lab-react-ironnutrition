import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import { useState } from 'react';
import { Divider, Row } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodForm, setFoodForm] = useState({
    name: '',
    calories: 0,
    servings: 1,
    image: 'https://i.imgur.com/eTmWoAN.png',
  });

  const updatedFoodForm = (event) => {
    setFoodForm({
      ...foodForm,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleAddFood = (event) => {
    event.preventDefault();

    const foodFormCopy = {
      ...foodForm,
    };
    setFoodArray([...foodArray, foodFormCopy]);

    setFoodForm({
      name: '',
      calories: 0,
      servings: 1,
      image: 'https://i.imgur.com/eTmWoAN.png',
    });
  };

  const [foodArray, setFoodArray] = useState(foods);
  const [filteredFoodArray, setFilteredFoodArray] = useState(foods);
  const [search, setSearch] = useState('');

  const updateSearch = (event) => {
    const newFilteredArray = foodArray.filter((individualFood) => {
      return individualFood.name
        .toLowerCase()
        .includes(event.currentTarget.value);
    });
    setFilteredFoodArray(newFilteredArray);
    setSearch(event.currentTarget.value);
  };

  const handleDeleteFood = (name) => {
    const foundFoodItem = foodArray.find(
      (individualFood) => individualFood.name === name
    );

    const foodArrayCopy = { ...foodArray };
    const removedFood = foodArrayCopy.splice(foundFoodItem, 1);

    setFoodArray(foodArrayCopy);

    setFilteredFoodArray(foodArrayCopy);
  };

  return (
    <div className="App">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <AddFoodForm
          foodForm={foodForm}
          updatedFoodForm={updatedFoodForm}
          handleAddFood={handleAddFood}
        />
        <Search search={search} updateSearch={updateSearch} />
      </div>
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {filteredFoodArray.map((eachFood) => {
          return <FoodBox food={eachFood} />;
        })}
      </Row>
    </div>
  );
}
export default App;
