import foodsData from './foods.json';
import './App.css';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import { Row, Divider, Button } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App(props) {
  const [foods, setFoods] = useState(foodsData);
  const [eten, setEten] = useState(foodsData);
  const [show, setShow] = useState(true);

  const addNewFood = (newFood) => {
    const updatedFoods = [...foods, newFood];
    const updatedEten = [...eten, newFood];

    setFoods(updatedFoods);
    setEten(updatedEten);
  };

  const deleteFood = (foodName) => {
    const filteredEten = foods.filter((food) => {
      return food.name !== foodName;
    });
    setFoods(filteredEten);
  };

  function Searched(zoek) {
    if (!zoek) {
      setFoods(foodsData);
    } else {
      const filteredFood = foodsData.filter((ele) => {
        return ele.name.toLowerCase().includes(zoek.toLowerCase());
      });
      setFoods(filteredFood);
    }
  }

  const showing = () => {
    setShow(!show);
  };

  return (
    <div className="App">
      <h1>IronNutrition Lab!</h1>
      <button onClick={showing}> {show ? 'show' : 'hide'}</button>
      {show ? (
        <AddFoodForm AddFoodForm={addNewFood} />
      ) : (
        <p>Nothing to see here!</p>
      )}

      <Search Searched={Searched} />
      {/* {foods.map((food) => {
        return <div><p>{food.name}</p>
          
          <img src={food.image} alt="FoodPicture" width={200}/>
        </div>
      })}

      <FoodBox food={{
        name: "orange",
        calories: 85,
        image: "https://i.imgur.com/abKGOcv.jpg",
        servings:1
      }} /> */}
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foods.length >= 1 ? (foods.map((food) =>
        {
          return <FoodBox food={food} clickToDelete={deleteFood} />;
        }
        )) : <p>Oh no! The list is empty!</p>
        }
      </Row>
    </div>
  );
}

export default App;
