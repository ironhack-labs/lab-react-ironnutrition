import React, { useEffect, useState } from 'react';
import './App.css';
import uuid from 'react-uuid';
import 'bulma/css/bulma.css';
import FoodBox from './component/FoodBox';
import AddFood from './component/AddFood';

import foodsData from './foods.json';

function App() {
  const [foods, setFoods] = useState([]);
  const [searchedFoods, setSearchFoods] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isForm, setIsForm] = useState(true);
  const [query, setQuery] = useState('');

  const [addingFood, setAddingFood] = useState([]);
  const [addedFood, setAddedFood] = useState([]);

  useEffect(() => {
    setFoods(foodsData);
    setTimeout(() => {
      setIsLoading(false);
    }, [1000]);
  }, []);

  let handleAdd = (event) => {
    event.preventDefault();
    let name = event.target.name.value;
    let calories = event.target.calories.value;
    let image = event.target.image.value;
    setFoods([...foods, { name, calories, image }]);
    setIsForm(true);
  };

  const hanleShowForm = () => {
    setIsForm(false);
  };

  const handleSearch = (query) => {
    setQuery(query);
    setSearchFoods(
      foods.filter((elem) =>
        elem.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const handleAddButton = (foodDetails, value) => {
    console.log('hellofrom App', value);
    let name = foodDetails.name;
    let calories = foodDetails.calories * value;

    let total = `${value} ${name} = ${calories} calories   `;

    setAddingFood([...addingFood, total]);

    setAddedFood([...addedFood, calories]);
    // setAddingFood(adding)
  };

  return (
    <>
      {isLoading ? (
        <h1>loading </h1>
      ) : (
        <div className="App">
          {isForm ? (
            <>
              <button onClick={hanleShowForm}>show</button>
              <input
                type="search"
                placeholder="search"
                onChange={(event) => handleSearch(event.target.value)}
              />

              <div style={{ marginLeft: '60%' }}>
                Today's Food
                <p>{addingFood}</p>
              </div>
            </>
          ) : (
            <AddFood onAdd={handleAdd} />
          )}

          {query == ''
            ? foods.map((elem) => {
                return (
                  <FoodBox
                    key={uuid()}
                    food={elem}
                    onAdding={handleAddButton}
                  />
                );
              })
            : searchedFoods.map((elem) => {
                return <FoodBox key={uuid()} food={elem} />;
              })}
        </div>
      )}
    </>
  );
}

export default App;
