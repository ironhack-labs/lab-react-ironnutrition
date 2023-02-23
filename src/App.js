
import { Card} from "antd";
import foods from './foods.json';
import FoodBox from './components/FoodBox'
import AddFoodForm from "./components/AddFoodForm";
import { useState } from "react";
import Search from "./components/Search";



function App() {
  
  const [foodElement, setFoodElement] = useState(foods)
  const [foodFilter, setFoodFilter] = useState("")
  console.log (foodElement) 

  const createNewElement = ({ inputName, inputImage, inputCalories, inputServings}) =>{
    const newFood = {
      name: inputName,
      image:inputImage,
      calories:inputCalories,
      servings:inputServings,
    }
    setFoodElement([...foodElement,newFood])
  }

  const search = (value) => {
    setFoodFilter(value)
  };

  const filteredFood = foodElement.filter((food) => 
    food.name.toLowerCase().includes(foodFilter.toLowerCase())
  );

  const deleteFood = (newFood) => {
    setFoodElement(foodElement.filter((food) => food.name !== newFood)) 
  };

  return (
        <div className="App">
          <h2>Food Entry</h2>
            <AddFoodForm createNewElement={createNewElement} />
          <h2>Search</h2>
          

            <Search search={search} />
          <h1>Food List</h1> 
          {filteredFood.map((food) => {
          return (  
            <Card key={food.name} title={food.name}>
              <FoodBox  {...food} onDelete={() => deleteFood(food.name)}/>
            </Card>
           );
          })
        }  
        </div>
      )
    }   


export default App;
