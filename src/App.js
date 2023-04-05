import foods from "./foods.json";
import './App.css';
import { useState, useMemo } from "react";
import FoodBox from "./component/FoodBox"
import AddFoodForm from "./component/AddFoodForm"
import { Row, Divider, Button } from 'antd';

function App() {
  const [food, setFood] = useState(foods);
  const [query, setQuery] = useState('');
  const [showForm, setShowForm] = useState(true);

  const filteredFood = useMemo (()=>{
    return food.filter((element) =>{
      return element.name.toLowerCase().includes(query.toLowerCase())
    })
  }, [food, query])

  const addNewFood = (newFood) => {
    setFood((prevFood) => {
      const newList = [newFood, ...prevFood];
      return newList;
    });
  };
  const deleteFood = (foodName) => {
    const newList = food.filter( foodDetails => foodDetails.name !== foodName);
    setFood(newList);
  }

  return (
    <div>
      <Button onClick={() => setShowForm(!showForm)} className="App form-size" >
        {showForm ? "Hide Form" : "Add New Food"}
      </Button>
      {showForm && <AddFoodForm callbackAdd={addNewFood} className="form-size" />}
      <Divider>Search</Divider>
      <input type= "search" value={query} onChange={e => setQuery(e.target.value)} className="App form-size" />
      <Divider>Food List</Divider>
      {/* {filteredFood.map(element => (
        <div>{element.name}</div>
        ))} */}
        <Row style={{ width: '100%', justifyContent: 'center' }}>
      {filteredFood.map((element, index) => {
        return (
          <div  key={index} className="App">
            <FoodBox food={element} callbackDelete={deleteFood} />
          </div>
        );
      })}
      </Row>
    </div>
  );
}

export default App;
