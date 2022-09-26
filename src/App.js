import './App.css';
import foods from './foods.json';
import { useEffect, useState } from 'react';
import { Divider, Button } from 'antd';
import FoodList from './components/FoodList';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import FeedbackMessage from './components/FeedbackMessage';

function App() {
  const [foodList, setFoodList] = useState([...foods]);
  const [filter, setFilter] = useState('');
  const [showForm, setShowForm] = useState(false);

  function displayFoodlist() {
    if (foodList.length === 0) {
      return <FeedbackMessage />;
    } else {
      return (
        <FoodList
          currentFoodList={foodList}
          changeFoodList={setFoodList}
          currentFilter={filter}
        />
      );
    }
  }

  return (
    <div className="App">
      {showForm ? <AddFoodForm addFoodFunction={setFoodList} /> : null}
      <Button type="primary" ghost onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Hide Form' : 'Add New Food'}
      </Button>
      <Search filterFoodList={setFilter}></Search>

      <Divider>Food List</Divider>
      {displayFoodlist()}
    </div>
  );
}

export default App;
