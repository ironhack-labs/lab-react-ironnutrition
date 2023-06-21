import { Row, Divider, Button } from 'antd';
import { useState } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox'
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App(props) {
  const [foodsToDisplay, setFoodsToDisplay] = useState(foods);
  const [query, setQuery] = useState("")

  const filteredFoods = foodsToDisplay.filter(foods => {
   return foods.name.toLowerCase().includes(query.toLowerCase())
  })

  const addFood = (newFood) => {
    const newList = [...foodsToDisplay, newFood];
    setFoodsToDisplay(newList);
  };

  const deleteFood = (foodName) => {
    const newList = foodsToDisplay.filter((element) => {
      return element.name !== foodName;
    })
    setFoodsToDisplay(newList);
  }

  

  return (
    <div className="App">
      <Button> Hide Form / Add New Food </Button>

      <AddFoodForm foodsToDisplay={foodsToDisplay} addFood={addFood}/>

      <Search query={query} setQuery={setQuery}/>

      <Divider>Food List</Divider>


      <Row style={{ width: '100%', justifyContent: 'center' }}>
      {filteredFoods
      .map(function (foodObj) {
        return (
          <FoodBox foodObj={foodObj} deleteFood={deleteFood}/>
        );
      })}
      </Row>
    </div>
  );
}

export default App;
