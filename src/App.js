import './App.css';
import { Card } from 'antd';
import { useState } from 'react'; // import useState hook
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodList, setFoodList] = useState(foods);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e);
  };

  //* Funcion para filtrar comida
  const filteredFoods = foodList.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //* Funcion para remover comida
  const removeFood = (foodName) => {
    setFoodList(foodList.filter((food) => food.name !== foodName));
  };

  const addNewFood = ({
    inputName,
    inputImage,
    inputCalories,
    inputServings,
  }) => {
    const newFood = {
      name: inputName,
      image: inputImage,
      calories: inputCalories,
      servings: inputServings,
    };

    setFoodList([...foodList, newFood]);
  };

  return (
    <>
      <h2>Create Food</h2>
      <AddFoodForm addNewFood={addNewFood} />
      <h2>Search Food</h2>
      <Search handleSearch={handleSearch} />
      <h2>Food List</h2>
      {filteredFoods.map((food, i) => {
        return (
          <Card key={i} title={food.name} size="small" bordered>
            <FoodBox {...food} onDelete={() => removeFood(food.name)} />
          </Card>
        );
      })}
    </>
  );
}

export default App;
