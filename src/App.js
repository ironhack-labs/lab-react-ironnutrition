import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { Divider } from 'antd';
import SearchBar from './components/SearchBar';

function App() {
  const [food, setFood] = useState(foods);
  const [searchInput, setSearchInput] = useState('');

  // const deleteFood = (foodName) => {
  //   // Traer la lista de comida actualizada
  //   setFood((updatedFoods) => {
  //     // Filtra la comida de la lista y devuelve una list actualizada
  //     const updatedList = updatedFoods.filter((food) => {
  //       // Devuelve las comidas que no sean iguales a lo filtrad
  //       return food.name !== foodName;
  //     });
  //     return updatedList;
  //   });
  // };

  return (
    <div className="App">
      <AddFoodForm setFood={setFood}></AddFoodForm>
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      ></SearchBar>
      <Divider>Food list</Divider>
      {food
        .filter((item) => {
          return item.name.toLowerCase().includes(searchInput.toLowerCase());
        })
        .map((item) => {
          return <FoodBox key={item.name} food={item} />;
        })}
    </div>
  );
}

export default App;
