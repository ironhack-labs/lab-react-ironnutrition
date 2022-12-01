import './App.css';
import { useState } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import { Button, Row } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [foodBackup, setFoodBackup] = useState(foods);
  const [hide, setHide] = useState(false)

  const addFoodFn = (data) => {
    const newFood = [...foodList, data]
    setFoodList(newFood);
    setFoodBackup(newFood);
  }

  const searchFN = (term) => {
    const matches = foodBackup.filter((food) => {
        return food.name.toLowerCase().includes(term.toLowerCase());
      }
    );
    setFoodList(matches);
  }

  const deleteFood = (index) => {
    const cpFoodList = [...foodList];
    cpFoodList.splice(index, 1);
    setFoodList(cpFoodList);
    setFoodBackup(cpFoodList);
  }

  const hideForm = () => {
    setHide(value => !value)
  }

  return (
    <div className="App">
      {!hide && <AddFoodForm addFoodFn={addFoodFn}/>}
      <Button type='primary' onClick={hideForm}>{hide ? "Add New Food" : "Hide Form"}</Button>
      <Search searchFN={searchFN}></Search>
      <Row style={{justifyContent: "center"}} gutter={[20, 20]}>
        {foodList.map((food, i) => <FoodBox food={food} key={food.name} deleteFood={deleteFood} index={i}/>)}
      </Row>
      {foodList.length === 0 &&
        <div>
          <p>Oops, no more content to show!</p>
          <img src="https://cdn-icons-png.flaticon.com/512/43/43533.png" alt="empty"/>
        </div>
      }
    </div>
  );
}

export default App;
