import './App.css';
import foodsDB from '../src/foods.json';
import React, { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import FoodBox from './components/FoodBox/FoodBox';
import AddFoodForm from './components/AddFoodForm/AddFoodForm';
import Search from './components/Search/Search';

function App() {
  const [foods, setFoods] = useState(foodsDB);
  const [searchKeyword, updateSearchKeyword] = React.useState('');

  const handleAddFood = (food) => {
    setFoods([...foods, food]);
  };

  const handleDelete = (name) => {
    const newList = foods.filter((food) => food.name !== name);
    console.log(newList);
    setFoods(newList);
  };

  const handleInputChange = (event) => {
    updateSearchKeyword(event.target.value);
  };
  const filteredList = foods.filter((item) => {
    return item.name.toLowerCase().includes(searchKeyword.toLowerCase());
  });

  // const handleInputChange = foods.filter((food) => {
  //   if (searchKeyword !== '') {
  //     const filteredList = foods.filter((food) => {
  //       return food.name.match(new RegExp(searchKeyword, 'i'));
  //       return food.name.toLowerCase().includes(searchKeyword.toLowerCase());
  //     });
  //   }
  // });

  return (
    <div className="App">
      {/* {foods.map((food) => {
        return (
          <div>
            <p>{food.name}</p>
            <img src={food.image} width={100} alt="" />
          </div>
        );
      })} */}

      {/* Display Add Food component here */}
      <AddFoodForm handleAddFood={handleAddFood} />

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}
      <Search handleInputChange={handleInputChange} />
      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        {filteredList.map((food) => {
          return <FoodBox oneFood={food} handleDelete={handleDelete} />;
        })}
      </Row>
    </div>
  );
}
export default App;
