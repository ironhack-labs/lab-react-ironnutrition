import React, { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './Components/FoodBox';
import AddFoodForm from './Components/AddFoodForm';
import { Button, Row } from 'antd';
import Search from './Components/Search';

function App() {
  const [foodList, setFoodList] = useState([...foods]);
  const [filteredList, setFilteredList] = useState([...foods]);
  const [toggleForm, setToggleForm] = useState(false);

  const onSearchHandler = (search) => {
    if (!search) {
      setFilteredList(foodList);
    } else {
      const filter = foodList.filter((food) =>
        food.name.toLowerCase().includes(search)
      );
      setFilteredList(filter);
    }
  };

  return (
    <React.Fragment>
      <Search onSearch={onSearchHandler} />
      {toggleForm && (
        <AddFoodForm
          onCreate={setFoodList}
          updateFilter={setFilteredList}
          onClose={setToggleForm}
        />
      )}
      {!toggleForm && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            type="primary"
            style={{ margin: '20px' }}
            onClick={() => setToggleForm(true)}
          >
            Create new food
          </Button>
        </div>
      )}
      <Row gutter={[3, 17]}>
        {filteredList.length ? (
          filteredList.map((food, i) => (
            <FoodBox
              key={i}
              name={food.name}
              calories={food.calories}
              image={food.image}
              servings={food.servings}
              updateList={setFoodList}
              updateFilter={setFilteredList}
            />
          ))
        ) : (
          <div
            style={{
              margin: '0 auto',
            }}
          >
            <h3>Oops! No more content to show</h3>
            <img
              src="https://i1.sndcdn.com/avatars-Svw9ZyyzGQhWH2ao-YfBvLQ-t500x500.jpg"
              alt="no content"
            />
          </div>
        )}
      </Row>
    </React.Fragment>
  );
}

export default App;
