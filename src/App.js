import { Divider, Row } from 'antd';
import FoodBox from './components/food-box/FoodBox';
import './App.css';
import AddFoodForm from './components/add-food-form/AddFoodForm';
import foods from './data/foods.json';
import { useState } from 'react';
import SearchBar from './components/search-bar/SearchBar';

function App() {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(1);
  const [foodArray, setFoodArray] = useState(foods);
  const [search, setSearch] = useState('');
  const [show, setShow] = useState(true)

  const handleSubmit = (event) => {
    event.preventDefault();
    foodArray.push({ name, calories, image, servings });
    setFoodArray([...foodArray]);
  };

  const handleDelete = (name) => {
    setFoodArray(foodArray.filter((f) => name !== f.name));
  };

  return (
    <div className="App container">
    
    <Divider>Add Food Entry</Divider>

      {show ? (
        <div>
          <AddFoodForm
          handleSubmit={handleSubmit}
          name={name}
          setName={setName}
          image={image}
          setImage={setImage}
          calories={calories}
          setCalories={setCalories}
          servings={servings}
          setServings={setServings}
          />
          <div className='show-hide-buttons'>
            <button onClick={() => {setShow(!show)}}>Hide Form</button>
          </div>
          
        </div> ) : (
          <div className='show-hide-buttons'>
            <button onClick={() => {setShow(!show)}}>Show Form</button>
          </div>
      )}
      

      <Divider> Search </Divider>

      <SearchBar search={search} setSearch={setSearch} />

      <Divider> Food List </Divider>

      {foodArray.length === 0 ? (
        <div className='no-more-items'> 
          <h3>Oops! Thre is no more content to show.</h3>
          <img src="https://cdn-icons-png.flaticon.com/512/594/594468.png" alt="no more items" />
        </div>
      ) : (
        <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodArray
          .filter((food) =>
            food.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((food) => (
            <FoodBox key={food.name} {...food} handleDelete={handleDelete} />
          ))}
      </Row>
      )}      
    </div>
  );
}

export default App;

/* 
import { Divider, Row } from 'antd';
import FoodBox from './components/food-box/FoodBox';
import './App.css';
import AddFoodForm from './components/add-food-form/AddFoodForm';
import foods from './data/foods.json';
import { useState } from 'react';
import SearchBar from './components/search-bar/SearchBar';

function App() {
  const [foodArray, setFoodArray] = useState(foods);
  const [search, setSearch] = useState('');
  const [show, setShow] = useState(true)

  const handleDelete = (name) => {
    setFoodArray(foodArray.filter((f) => name !== f.name));
  };

  return (
    <div className="App container">
    
    <Divider>Add Food Entry</Divider>

      {show ? (
        <div>
          <AddFoodForm foodArray={foodArray} setFoodArray={setFoodArray}
          />
          <div className='show-hide-buttons'>
            <button onClick={() => {setShow(!show)}}>Hide Form</button>
          </div>
          
        </div> ) : (
          <div className='show-hide-buttons'>
            <button onClick={() => {setShow(!show)}}>Show Form</button>
          </div>
      )}
      

      <Divider> Search </Divider>

      <SearchBar search={search} setSearch={setSearch} />

      <Divider> Food List </Divider>

      {foodArray.length === 0 ? (
        <div className='no-more-items'> 
          <h3>Oops! Thre is no more content to show.</h3>
          <img src="https://cdn-icons-png.flaticon.com/512/594/594468.png" alt="no more items" />
        </div>
      ) : (
        <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodArray
          .filter((food) =>
            food.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((food) => (
            <FoodBox key={food.name} {...food} handleDelete={handleDelete} />
          ))}
      </Row>
      )}      
    </div>
  );
}

export default App; */
