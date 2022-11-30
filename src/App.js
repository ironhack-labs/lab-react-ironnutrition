import './App.css';
import { useState } from "react";
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { Row, Button} from 'antd';
import Search from './components/Search'

function App() {

  const [food, setFood] = useState(foods);
  const [searchTerm, setSearchTerm] = useState("");
  const[show,setShow]=useState(true);

  function addNewFood(newFood){
    const updatedFood = [...food, newFood];
    setFood(updatedFood);
  }

  function removeFood(name){
    const deletedFood = food.filter(food => food.name !== name);
    setFood(deletedFood);
  }

  return <div className="App">

    {/* search for food */}
    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> 

    {/* add new food */}
    <Button onClick={()=>setShow(!show)}>{!show ? "Show Form" : "Hide Form" }</Button>
    {show ? <AddFoodForm addFood={addNewFood}/> :null}
    

    {/* map and list all cards depending on search as well */}
    <Row style={{ width: '100%', justifyContent: 'center' }}>
      {food.filter(el => {
        return searchTerm === "" ? true : el.name.includes(searchTerm)})
        .map((anyFood) => (
        <div key={anyFood.name}>
          <FoodBox food={anyFood} deleteFood={removeFood}/>
        </div>
      ))}
    </Row>

  </div>;
}
export default App;
