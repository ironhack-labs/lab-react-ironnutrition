import './App.css';
import { Row, Divider, Button } from 'antd';
import { useState } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [food, setFood] = useState(foods);
  const [filteredData, setFilteredData] = useState(foods);
  const [searchInput, setSearchInput] = useState(false);
  const [showForm, setShowForm] = useState(false);

  function AddNewFood(addedFood) {
    setFood([...food, addedFood]);
  }

  function SearchFood(searchName) {
    const filteredFoodList = food.filter((element) => {
      return element.name.toLowerCase().includes(searchName.toLowerCase());
    });
    setSearchInput(true);
    setFilteredData([...filteredFoodList]);
  }

  function DeleteItem(foodName) {
    const updatedList = food.filter((element) => {
      return element.name !== foodName;
    });
    setFood([...updatedList]);
    setFilteredData([...updatedList]);
  }

  return (
    <div className="App">
      {showForm && <AddFoodForm addFood={AddNewFood} />}
      <Button
        onClick={() => {
          {
            setShowForm(!showForm);
          }
        }}
      >
        {showForm ? 'Hide Form' : 'Add New Food'}
      </Button>
      <Search search={SearchFood} />
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {food.length === 0 && (
          <div>OOps! There is no more content to show.</div>
        )}

        {!searchInput &&
          food.map((element) => {
            return (
              <FoodBox key={element.name} food={element} delete={DeleteItem} />
            );
          })}
        {searchInput &&
          filteredData.map((element) => {
            return (
              <FoodBox key={element.name} food={element} delete={DeleteItem} />
            );
          })}
      </Row>
    </div>
  );
}

export default App;
