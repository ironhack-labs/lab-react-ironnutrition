import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { Divider } from 'antd';

function App() {
  const [food, setFood] = useState(foods);

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

      <Divider>Food list</Divider>
      {food.map((item) => {
        return (
          <div key={item.name}>
            <FoodBox food={item}></FoodBox>
          </div>
        );
      })}
    </div>
  );
}

export default App;
