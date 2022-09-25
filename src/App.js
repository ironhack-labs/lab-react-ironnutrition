import './App.css';
import foods from './foods.json'
import { Row, Divider, Button } from 'antd';
import FoodBox from './components/FoodBox';
import { v4 as uuid } from "uuid";
import { useState } from 'react';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search'


function App() {

  const [foodsList, setFoodsList] = useState(foods)
  const [stableList, setStableList] = useState(foods)
  const [showcreteform,setcreateform] = useState(true)

  const deleteFood =foodName =>{

    const filteredFoods = foodsList.filter(food=>{
      return food.name !==foodName;
    })
    setFoodsList(filteredFoods)
    setStableList(stableList)
  }

  let serchedFoods
  const searchFood = (str) => {
    const copyFoodList = [...stableList]
    if (str === '') {
      serchedFoods = copyFoodList
    } else {
      serchedFoods = copyFoodList.filter((food) => {
        return food.name.toLowerCase().includes(str.toLowerCase())
      })
    }
    setFoodsList(serchedFoods)
  };


const hideevent=e=>{
  setcreateform(!showcreteform)

}
  return (
    <div className="App">
     
 {/* Display Add Food component here */}
 {showcreteform && <AddFoodForm foodsList={foodsList} setFoodsList={setFoodsList} stableList={stableList} setStableList={setStableList}/> }
<br></br>
      <Button type="primary" onClick={hideevent} >{showcreteform ? 'Hide Form' :'Add New Food' }</Button>

      <Search searchFood={searchFood} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodsList.map(food => 
          <FoodBox food={food} key={uuid()} deleteFood={deleteFood} />
        )}
      </Row>


    </div>
  );
}




export default App;
