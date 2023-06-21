import { useState } from "react";
import { Card, Row, Col, Divider, Input, Button } from "antd"; 
import './App.css';
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";

function App() {

  const [arrayOfFood, setArrayOfFood] = useState(foods);
  const [showAddForm, setShowAddForm] = useState(false);

  const addFood = (newFood) => {
    setArrayOfFood([newFood, ...arrayOfFood ]);
  };

  function deleteFood(index) {
    const updateFood = arrayOfFood.filter((element, i) => {
      return i !== index
    })
    setArrayOfFood(updateFood);
  }

  const handleSearch = (searchQuery) => {
    // Filter the foods based on the search query
    const filteredFoods = arrayOfFood.filter((food) =>
      food.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    // Update the foods state with the filtered foods
    setArrayOfFood(filteredFoods);
  };

  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };


  return (
    <div className="App">

      <Button onClick={toggleAddForm}>Add Food</Button> {/* Button to toggle the form */}
      {showAddForm && <AddFoodForm addFood={addFood} />} {/* Display the form based on showAddForm state */}
      
      <Search onSearch={handleSearch} />
      
      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {arrayOfFood.map((element, index) => {
        return (
          <div>
            {element ? (<FoodBox foods={element} key={index} delete={() => {deleteFood(index)}}/>) : (<h3>Oops, there is no content to show</h3>)}
          </div>
        )
      }
      )}
      </Row>
    </div>
  );
}

export default App;
