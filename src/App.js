import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import { useState } from 'react';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import { Row, Divider, Button } from 'antd';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [showForm, setShowForm] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState('');

  const handleAddFood = (food) => {
    setFoodList([...foodList, food]);
  };

  const handleDeleteFood = (foodToDelete) => {
    const sortedFoods = foodList.filter((food) => food.name !== foodToDelete.name);
    setFoodList(sortedFoods);
  };

  const handleSearch = (searchPhrase) => {
    setSearchPhrase(searchPhrase);
    const sortedFoods = foods.filter((food) =>
      food.name.toLowerCase().includes(searchPhrase.toLowerCase())
    );
    setFoodList(sortedFoods);
  };

  const handleHideForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      {showForm ? <AddFoodForm onAddFood={handleAddFood} /> : null}

      <Button onClick={handleHideForm}>
        {showForm ? 'Hide Form' : 'Add New Food'}
      </Button>

      {showForm ? null : (
        <Search searchPhrase={searchPhrase} onSearch={handleSearch} />
      )}

      <Divider>Food List</Divider>

      {foodList.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '20px' }}>
          Oops! There is no more content to show.
        </p>
      ) : (
        <Row style={{ width: '100%', justifyContent: 'center' }}>
          {foodList.map((food) => (
            <FoodBox
              key={food.name}
              food={{ ...food, handleDelete: handleDeleteFood }}
            />
          ))}
        </Row>
      )}
    </div>
  );
}

export default App;
