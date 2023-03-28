import { useState } from 'react';
import { Button } from 'antd';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [search, setSearch] = useState();
  const [viewForm, setViewForm] = useState(false);

  const handleSubmit = (value) => {
    setFoodList((prev) => [value, ...prev]);
  };

  const handleSearch = (value) => {
    setSearch(value);
  };

  const handleDelete = (value) => {
    setFoodList((prev) => prev.filter((food) => food.name !== value));
  };

  return (
    <div className="App">
      <div className="search">
        {viewForm && <AddFoodForm addFood={handleSubmit} />}

        <Button type="primary" onClick={() => setViewForm(!viewForm)}>
          {viewForm ? 'Hide Form' : 'Add New Food'}
        </Button>

        <SearchBar search={search} searchFood={handleSearch} />
      </div>

      {foodList.length ? (
        <div className="cards-container">
          {foodList
            ?.filter(
              (food) =>
                search === undefined ||
                food.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((food, i) => (
              <FoodBox key={i} food={{ ...food }} removeFood={handleDelete} />
            ))}
        </div>
      ) : (
        <h1 className="oops">Oops! There is no more content to show</h1>
      )}
    </div>
  );
}

export default App;
