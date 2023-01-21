import { useState } from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json'
import { Row, Divider } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import ToggleVisibility from './components/ToggleVisibility';
import NoContent from './components/NoContent';


function App() {

  const [stateFood, setStateFood] = useState(foods)
  const [filteredFood, setFilteredFood] = useState(foods)


  function handleAddFood(newFood) {
    setStateFood([newFood, ...stateFood])
    setFilteredFood([newFood, ...stateFood])
  }



  function handleFilterFood(keyWord) {

    const filterdFoods = stateFood.filter(food => {
      return food.name.toLocaleLowerCase().startsWith(keyWord.toLocaleLowerCase())
    })

    setFilteredFood(filterdFoods)

  }


  // Iteration 6 - delete

  function handleDeleteMovie(foodName) {
    const filteredFood = stateFood.filter((food) => {
      return food.name !== foodName;
    })

    // SETTING THE STATE WITH THE FILTERED MOVIES
    setStateFood(filteredFood);
    setFilteredFood(filteredFood);

  }


  return (
    <div className="App">


      <ToggleVisibility>
        <AddFoodForm handleAddFood={handleAddFood} />
      </ToggleVisibility>

      <Search handleFilterFood={handleFilterFood} />
      <Divider>Food List</Divider>
      
      <NoContent food={stateFood}>
        <Row>
          {
            filteredFood.map((food) => {
              return (
                <FoodBox food={food} key={Math.random().toString(16).slice(2)} handleDeleteMovie={handleDeleteMovie} />
              )
            })
          }
        </Row>
      </NoContent>



    </div >
  );
}

export default App;
