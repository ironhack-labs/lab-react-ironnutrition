import './App.css';
import { useState } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import { Row, Divider } from 'antd';
function App() {
  //State for original foods
  const [allFoods, setAllFoods] = useState(foods);
  //State for updated foods
  const [allFoodsData, setAllFoodsData] = useState(foods);
  const [filtered, setFiltered] = useState('');

  const filteredFoods = allFoodsData.filter((food) => {
    return food.name.includes(filtered.toLowerCase());
  });

  const handleSearchChange = function (search) {
    setFiltered(filteredFoods);
  };

  const addNewFood = function (newFood) {
    const updatedFoods = [...allFoods, newFood];
    setAllFoods(updatedFoods);
    const updatedAllFoodsData = [...allFoodsData, newFood];
    setAllFoodsData(updatedAllFoodsData);
  };

  return (
    <div className="App">
      <AddFoodForm addNewFood={addNewFood} />

      {/* <Button> Hide Form / Add New Food </Button> */}

      <Search
        handleSearchChange={handleSearchChange}
        setFiltered={setFiltered}
      />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {filteredFoods.map((food) => {
          return <FoodBox food={food} />;
        })}
      </Row>
    </div>
  );
}

export default App;
