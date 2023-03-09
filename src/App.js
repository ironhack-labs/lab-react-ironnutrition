import './App.css';
import { Row, Divider, Button } from 'antd';
import foodJson from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import SearchBar from './components/SearchBar';

function App() {
  const [foods, setFoods] = useState(foodJson);
  const [foodsData, setFoodsData] = useState(foodJson);
  const [searchQuery, setSearchQuery] = useState('');
  const [showForm, setShowForm] = useState(false);

  const addNewFood = (newFood) => {
    setFoodsData([...foodsData, { ...newFood }]);

    newFood.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      setFoods([...foods, { ...newFood }]);

    setShowForm(false);
  };

  const searchFood = (query) => {
    setSearchQuery(query);

    setFoods([
      ...foodsData.filter((food) =>
        food.name.toLowerCase().includes(query.trim().toLowerCase())
      ),
    ]);
  };

  const deleteFood = (index) => {
    let unfilteredIndex = foodsData.findIndex(
      (el) => el.name.toLowerCase() === foods[index].name.toLowerCase()
    );

    foods.splice(index, 1);
    foodsData.splice(unfilteredIndex, 1);

    setFoods([...foods]);
    setFoodsData([...foodsData]);
  };

  const showHideForm = (
    <Button
      type="button"
      onClick={() => {
        setShowForm(!showForm);
      }}
    >
      {showForm ? 'Hide Form' : 'Add New Food'}
    </Button>
  );

  return (
    <div className="App">
      {showForm && <AddFood addFood={addNewFood} />}
      <Button
        onClick={() => {
          setShowForm(!showForm);
        }}
        style={{ marginTop: '50px' }}
      >
        {showForm ? 'Hide Form' : 'Add New Food'}
      </Button>
      <SearchBar searchFood={searchFood} style={{ width: '30%' }} />
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foods.map((food, index) => {
          return (
            <FoodBox
              key={index}
              food={food}
              index={index}
              delFood={deleteFood}
            />
          );
        })}
        {!foods.length && (
          <div style={{}}>Oops! there's no more content to show!</div>
        )}
      </Row>
    </div>
  );
}

export default App;
