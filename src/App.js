import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox/FoodBox';
import AddFoods from './components/AddFoods/AddFoods';
import Search from './components/Search/Search';
import foodsJson from './foods.json';

function App(props) {
  const [foods, setFoods] = React.useState(foodsJson);
  const [show, setShow] = React.useState(true);
  const [searchFood, setSearchFood] = React.useState('');


  function handleSearch(e) {
    setSearchFood(e.target.value);
  }

  const submit = (food) => setFoods(foods.concat(food));
  return (
    <div className="App">
      {show ? <AddFoods submitForm={submit} /> : null}
      <button onClick={() => setShow(!show)}>Add new food</button>
      <Search value ={searchFood} onChange={handleSearch} />
      {foods
        .filter((val) => {
          if (searchFood == ' ') {
            return val;
          } else if (
            val.name.toLowerCase().includes(searchFood.toLowerCase())
          ) {
            return val;
          }
        })
        .map((food) => (
          <FoodBox key={food.id} {...food} />
        ))}
      );
    </div>
  );
}

export default App;
