import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import { Button, Row } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [foodBackup, setFoodBackup] = useState(foods);
  const [hide, setHide] = useState(false)

  const addFood = (data) => {
    const auxFood = [...foodList, data]
    setFoodList(auxFood);
    setFoodBackup(auxFood);
  }

  const searchFN = (auxx) => {
    const au = foodBackup.filter((food) => {
        return food.name.toLowerCase().includes(auxx.toLowerCase());
      }
    );
    setFoodList(au);
  }

  const deleteFood = (index) => {
    const list = [...foodList];
    list.splice(index, 1);
    setFoodList(list);
    setFoodBackup(list);
  }

  const form = () => {
    setHide(value => !value)
  }

  return (
    <div className="App">
      {!hide && <AddFoodForm addFoodFn={addFood}/>}
      <Button type='primary' onClick={form}>{hide ? "Add New Food" : "Hide Form"}</Button>
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