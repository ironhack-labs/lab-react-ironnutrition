import { useState, useMemo } from 'react';
import { Row, Divider, Button } from 'antd';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodArr, setFoodArr] = useState(foods);
  const [showFood, setShowFood] = useState(foods);
  const [visible, setVisible] = useState(false);

  const addFood = (food) => {
    const foodArrCopy = [...foodArr, food];
    setFoodArr(foodArrCopy);
    setShowFood(foodArrCopy);
  };

  const searchFood = (query) => {
    const filteredFood = foodArr.filter((food) => {
      return food.name.toLowerCase().includes(query.toLowerCase());
    });
    setShowFood(filteredFood);
  };

  const deleteFood = (foodName) => {
    const filteredFood = foodArr.filter((food) => {
      return food.name !== foodName;
    });
    setFoodArr(filteredFood);
    setShowFood(filteredFood);
  };
  
  const toggleFormVisibility = () => {setVisible(!visible)};

//---------------------------------Tried useMemo to solve iteration 8
/*   const displayFood = useMemo(
    () =>
    {
        if(foodArr.length === 0) return <div>EMPTY</div>
        showFood.map((food) => {
          return (
            <FoodBox
              span={6}
              food={food}
              deleteFood={deleteFood}
              key={food.name}
            />
          );
        })
    },
    [foodArr, deleteFood, showFood]
) */


  return (
    <div className="App">
      
      <Button onClick={toggleFormVisibility}>{visible ? "Hide Form" : "Add New Food"}</Button>
      {visible && <AddFoodForm addFood={addFood} />}

      <Search searchFood={searchFood} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }} gutter={[16, 16]}>
        {showFood.map((food) => {
          return (
            <FoodBox
              span={6}
              food={food}
              deleteFood={deleteFood}
              key={food.name}
            />
          );
        })}
      </Row>

    </div>
  );
}

export default App;
