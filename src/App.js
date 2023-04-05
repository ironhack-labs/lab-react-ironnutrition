import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import { List } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodsList, setFoodsList] = useState([...foods]);
  const [searchString, setSearchString] = useState('');
  return (
    <div className="App">
      <AddFoodForm setFoodsList={setFoodsList} />
      <Search
        setSearchString={setSearchString}
        searchString={searchString}
      ></Search>
      <List grid={{ gutter: 16, column: 4 }}>
        {foodsList
          .filter((food) => {
            if (searchString) {
              return food.name
                .toLowerCase()
                .includes(searchString.toLowerCase());
            }
            return true;
          })
          .map((food, index) => (
            <List.Item>
              <FoodBox
                key={index}
                elmIndex={index}
                food={food}
                setFoodsList={setFoodsList}
              />
            </List.Item>
          ))}
      </List>
    </div>
  );
}

export default App;
