/* ----------------- Import -----------------*/
import './App.css';
import FoodBox                                    from './components/FoodBox';
import Search                                     from './components/Search';
import AddFoodForm                                from './components/AddFoodForm';
import foods                                      from './foods.json';
//import { Card, Row, Col, Divider, Input, Button } from 'antd';
import { useState }                               from 'react';


/* ------------------- App ------------------*/
function App() {

  // Save food in a state variable
  const [foodList, setFoodList] = useState(foods);
  const [query, setQuery]       = useState("");
  const [active, setActive]     = useState("false");

  // Filter function
  const filteredFood = foodList.filter(food => {
    return food.name.toLowerCase().includes(query.toLowerCase())
  });

  // Delete 
  const deleteFood = (name) => {
    const filteredFood = foodList.filter(food => {
        return food.name !== name
    });
    setFoodList(filteredFood);
  };

  // Toggle
  const handleToggle = () => {
    setActive(!active)
  };

  return (
    <div className="App">
      {/* ---------- food form ---------- */}
     <button onClick={ handleToggle }> Hide/Add form </button>
        {active &&
          <AddFoodForm foodList={ foodList } setFoodList={ setFoodList } />
        }
      
      {/* ---------- search bar ---------- */}
      <Search setQuery={ setQuery } query={ query } />

      <h1>Food List</h1>
      {/* ---------- food box ---------- */}
        <div className="food-box">
          {filteredFood.map(food => (
            <ul>
              <FoodBox food={ food } deleteFood={ deleteFood } />
            </ul>
          ))}
        </div>
        
      { !filteredFood.length && <p>Oops! There is no more content to show!</p> }
    </div>
  );
}

export default App;