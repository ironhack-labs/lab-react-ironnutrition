import { useState } from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import foodsJson from './foods.json';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foods, setFoods] = useState(foodsJson);
  const [searchText, setSearchText] = useState('');

  function addTheFood(name, image, calories, servings) {
    setFoods([...foods, { name, image, calories, servings }]);
  }

  function searchFood(event) {
    // Modifie le champ texte
    setSearchText(event.target.value);

    // Filtre dans une variable le contenu du champ texte
    const filteredFood = [...foodsJson].filter((food) =>
      food.name.toLowerCase().includes(event.target.value.toLowerCase())
    );

    // Modifie foods, ce qui change l'aspect visuel
    setFoods(filteredFood);
  }

  function destroy(name) {
    let foodsCopy = [...foods];
    // Recherche l'index ou l'object .name contient le nom de la food
    const index = foodsCopy.map((el) => el.name).indexOf(name);
    foodsCopy.splice(index, 1); // Supprime la food dans le tableau
    setFoods(foodsCopy); // Met à jour foods qui met aussi a jour l'affichage
  }
  const $addNewFood = document.querySelector('.addNewFood');
  const $BtnAddNewFood = document.querySelector('.BtnAddNewFood');

  function hideNewFood() {
    if ($addNewFood.style.display === 'none') {
      $BtnAddNewFood.innerHTML = 'Hide form';
      $addNewFood.style.display = 'block';
    } else {
      $addNewFood.style.display = 'none';
      $BtnAddNewFood.innerHTML = 'Add new food';
    }
  }

  const $notFood = document.querySelector('.notFood');
  ifNotfoods();
  function ifNotfoods() {
    if (foods === []) {
      $notFood.style.display = 'block';
    } else {
      $notFood.style.display = 'none';
    }
  }

  return (
    <div className="App">
      <div className="addNewFood">
        <h2>Add Food Entry</h2>

        <AddFoodForm addFood={addTheFood} />
      </div>
      <button className="BtnAddNewFood" onClick={hideNewFood}>
        Add new food
      </button>

      <h2>Search</h2>
      <Search searchFood={searchFood} searchText={searchText} />

      <h2>Food List</h2>
      <div className="Foodlist">
        {foods.map((el) => {
          return (
            <FoodBox
              key={el.name}
              destroy={() => destroy(el.name)}
              food={{
                name: el.name,
                calories: el.calories,
                image: el.image,
                servings: el.servings,
              }}
            />
          );
        })}
      </div>
      <div className="notFood">
        <p>ddddddddddd</p>
      </div>
    </div>
  );
}

export default App;
