import { useState, useEffect } from "react";
import { Row, Divider, Button } from "antd"; 
import './App.css';
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";

function App() {

  const [arrayOfFood, setArrayOfFood] = useState(foods);
  const [showAddForm, setShowAddForm] = useState(false);
  const [search, setSearchQuery] = useState('');
  const [originalFood, setOriginalFood] = useState(foods);

  useEffect(() => {
    const filteredFoods = originalFood.filter((food) => {
      return food.name.toLowerCase().includes(search.toLowerCase());
    });
    setArrayOfFood(filteredFoods);
  }, [search, originalFood]);

  function searchFood(search) {
    setSearchQuery(search);
  }

  
  function resetSearch() {
    setSearchQuery('');
    setArrayOfFood(originalFood);
  }


  const addFood = (newFood) => {
    setArrayOfFood([newFood, ...arrayOfFood ]);
  };

  function deleteFood(index) {
    const updateFood = arrayOfFood.filter((element, i) => {
      return i !== index
    })
    setArrayOfFood(updateFood);
  }


  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };


  return (
    <div className="App">
      <Button onClick={toggleAddForm}>Add Food</Button> {/* Button to toggle the form */}
      {showAddForm && <AddFoodForm addFood={addFood} />} {/* Display the form based on showAddForm state */}
      
      <Search onSearch={searchFood} reset={resetSearch}/>
      
      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>

      {arrayOfFood.length === 0 ? (
          <h3>Oops, there is no content to show</h3>
        ) : (
          arrayOfFood.map((element, index) => (
            <div key={index}>
              {element ? (
                <FoodBox foods={element} delete={() => {deleteFood(index)}} />
              ) : (
                <h3>Oops, there is no content to show</h3>
              )}
            </div>
          ))
        )}
      </Row>
    </div>
  );
}

export default App;
