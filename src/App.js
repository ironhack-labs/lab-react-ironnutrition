import { useState } from "react";
import './App.css';
import FoodBox from './components/FoodBox';
import foodsJson from './foods.json';
import AddFoodForm from './components/AddFoodForm';
import Search from "./components/Search";

function App() {
  const [foods, setFoods] = useState(foodsJson)
  const [searchText, setSearchText] = useState("")

  function addTheFood(name, image, calories, servings){
    setFoods([ ...foods, { name, image, calories, servings } ])
  }

  function searchFood(event){
    // Modifie le champ texte
    setSearchText(event.target.value)

    // Filtre dans une variable le contenu du champ texte
    const filteredFood = [ ...foodsJson ].filter(food => food.name.toLowerCase().includes(event.target.value.toLowerCase()))

    // Modifie foods, ce qui change l'aspect visuel
    setFoods(filteredFood);  
  }

  function destroy(name){
    let foodsCopy = [... foods]
    // Recherche l'index ou l'object .name contient le nom de la food
    const index = foodsCopy.map(el => el.name).indexOf(name);
    foodsCopy.splice(index,1) // Supprime la food dans le tableau
    setFoods(foodsCopy) // Met à jour foods qui met aussi a jour l'affichage
  }

  return (
    <div className="App">
      <h2>Add Food Entry</h2>
      <AddFoodForm addFood={addTheFood}/>

      <h2>Search</h2>
      <Search searchFood={searchFood} searchText={searchText}/>

      <h2>Food List</h2>
      <div className="Foodlist">
      {
        foods.map((el) => {
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
      })
      }
      </div>
      {/* <FoodBox
        food={{
          name: 'Orange',
          calories: 85,
          image: 'https://i.imgur.com/abKGOcv.jpg',
          servings: 1,
        }}
      /> */}
    </div>
  );
}

export default App;
