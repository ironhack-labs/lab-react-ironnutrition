import './App.css';
import foods from './foods.json';
import { useState } from "react"
//import SearchField from "./SearchField"
import FoodBox from './components/FoodBox';
import { Row, Divider, Button } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
function App() {
  const [meals, setMeals] = useState(foods);
  const [query, setQuery] = useState("");
  const [showForm, setShowForm] = useState(true);

  const deleteFood = (foodName) => {
    setMeals(meals => {
      return meals.filter(meal => meal.name !== foodName);
    })
  }

  return (
    
    <div className="App">
      {/* Display Add Food component here */}
      <Row 
          style={{ width: '30%', justifyContent: 'center', marginLeft: '75vh'}}>
      {showForm &&
      <AddFoodForm meals={meals} setMeals={setMeals}/>
      }
      <Button onClick={() => setShowForm(!showForm)} > Hide Form / Add New Food </Button>
      
      {/*Search field*/}
      <Search setQueryProp={setQuery}/>
      </Row>
      
      {/* Display Search component here */}

      <Divider>Food List</Divider>
      <h1>Food List</h1>
       <div className="foodListShown">
       
        <Row style={{ width: '100%', justifyContent: 'center' }}>
          {/* Render the list of Food Box components here */}
          <FoodBox meals={meals} queryProp={query} deleteFoodProp={deleteFood}/>
          {meals.length == 0 &&
          <p>Oops! There is no more content!</p>
          }
          </Row>
      </div>
    </div>

    
  );
}

export default App;
