import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFormFood from './components/AddFoodForm';
import Search from './components/Search';
import { Col } from 'antd';
function App() {
  const [foodsList, setFood] = useState(foods);

  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');

  const filterFood = (foods, query) => {
    if (!query) {
      return foods;
    }

    return foods.filter((food) => {
      console.log('i am here', food.name.includes(query));
      return food.name.includes(query);
    });
  };

  const filteredFoodsList = filterFood(foodsList, searchQuery);

  const deleteFood = (foodId) => {
    setFood((prevFoods) => {
      const newList = prevFoods.filter((element) => {
        console.log('this is element', element);
        return element.id !== foodId;
      });
      return newList;
    });
  };
  return (
    <div className="App">
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <AddFormFood foods={foodsList} setFoodChange={setFood} />

      <Col span={8}>
        {filteredFoodsList.map((element, index) => {
          // const id = { id: index };
          element.id = index;

          return <FoodBox food={element} callbackToDelete={deleteFood} />;
        })}
      </Col>
    </div>
  );
}

export default App;
