import React, { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {

  const [foodList, setFoodList] = useState(() => foods);
  // Search input state variable to keep track of the search input entered by the user
  const [searchInput, setSearchInput] = useState(() => '');
  // Show/Hide form
  const [showFoodForm, setShowFoodForm] = useState(() => false);

  const addNewFood = (newFood) => {
    const updatedFoodList = [...foodList, newFood];
    setFoodList(updatedFoodList);

  };

  // Filter food
  const filteredFood = foodList.filter(food => {
    return food.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  // Delete Food
  const deleteFood = (foodIndex) => {
    const updatedFoodList = foodList.filter((food, index) => {
      return index !== foodIndex;

    });

    setFoodList(updatedFoodList);
  };

    // Toggle show/hide form
    const toggleShowFoodFrom = () => {
      setShowFoodForm(!showFoodForm);
    };  


  return (
    <div className="App">
      {/* Display Add Food component here */}
      {showFoodForm && <AddFoodForm addNewFood={addNewFood} /> }
      

      <Button onClick={() => toggleShowFoodFrom()}>{showFoodForm ? 'Hide Form' :  'Add New Food'} </Button>

      {/* Display Search component here */}
      <Search searchInput={searchInput} setSearchInput={setSearchInput}  />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        {filteredFood.length === 0 ? (<p>Oops! There is no more content to show!</p>) 
        : (filteredFood.map((food, index) => (
          <FoodBox key={index} food={food} deleteFood={deleteFood} foodIndex={index}  />
        )))}
      </Row>
    </div>
  );
}

export default App;









// function App() {

//   const [foodList, setFoodList] = useState(() => foods);

//   return (
//     <div className="App">
//       <h1>Food List</h1>
//       {foodList.map((food, index) => {
//         return (
//           <div key={index}>
//         <p>{food.name}</p>
//         <img src={food.image} alt={food.name} width={100}  />
//       </div>
//         )
//       })};

//   <FoodBox food={ {
//   name: "Orange",
//   calories: 85,
//   image: "https://i.imgur.com/abKGOcv.jpg",
//   servings: 1
// }} />
      
//     </div>
//   );
// }

// export default App;