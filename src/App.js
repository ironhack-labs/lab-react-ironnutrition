import foods from "./foods.json";
import { Card} from "antd"; 
import { Foodbox } from "./components/Foodbox";
import { AddFoodForm } from "./components/AddFoodForm";
import { useState } from "react";
import { Search } from "./components/Search";



function App() {
  
  // console.log(menu)
  const [oldMenu, coolMenu] = useState(foods)
  const [foodFilter, setFoodFilter] = useState("")

  const addNewMenu = ({name, image, calories, servings}) =>{
    const newMenu = {
      name: name,
      image: image,
      calories: calories,
      servings: servings
    }

    coolMenu([...oldMenu, newMenu])
    
  }

  const search = (value) => {
    setFoodFilter(value)
  };

  const filteredFood = oldMenu.filter((food) => 
    food.name.toLowerCase().includes(foodFilter.toLowerCase())
  )


  const borrado = (foodName) => {coolMenu(oldMenu.filter((food) => food.name !== foodName))}

  return (

   
  <div className="App">
    <AddFoodForm createNewElement={addNewMenu}/>
    <Search search={search}/>
    {filteredFood.map((food) => {

  return (
  <Card key={food.name} title={food.name} size="small" bordered>
 <Foodbox  {...food} borrado={()=> borrado(food.name)}/>
 </Card>
);
})}
 </div>
  )
}

export default App;
