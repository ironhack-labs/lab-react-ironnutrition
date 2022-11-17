import './App.css';
import foods from './foods.json';
import {useState} from "react"
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import {Button, Divider, Row} from "antd"

function App() {
  const [foodsArr, setFoodsArr] = useState(foods);
  const [showFoods, setShowFoods] = useState(foods);
  const [showForm, setshowForm] = useState(false);

  const addFood = (food) => {
    let newFoodsArr = [food, ...foodsArr];
    setFoodsArr(newFoodsArr);
    setShowFoods(newFoodsArr);
  }

  const searchFoods = (query) => {
    const queriedFoodsArr = foodsArr.filter(food => food.name.toLowerCase().includes(query.toLowerCase()));
    setShowFoods(queriedFoodsArr);
  }

  const deleteFoods = (name) => {
    const filterFoods = foodsArr.filter(food => food.name !== name);
    setFoodsArr(filterFoods);
    setShowFoods(filterFoods);
  }

  const toggleForm = () => setshowForm(!showForm);

  return (
    <div className="App">

      {showForm &&  <AddFoodForm addFood = {addFood}/>}
      <Button onClick={toggleForm}>{showForm? "Hide Form" : "Add New Food"}</Button>

      <Search searchFoods = {searchFoods}/>

      <Divider>Food List</Divider>
      {showFoods.length === 0 
      ? (<div>
          <h1 style={{color: "red"}}>ADD FOODS!!</h1>
          <img src="https://www.mypokecard.com/en/Gallery/my/galery/Pdw3bDERUrrS.jpg" alt="pikachu hungry"/>
        </div>) 
      : <Row style={{ width: '100%', justifyContent: 'center' }}>
        {showFoods.map(food => {
          return (
            <FoodBox food = {food} deleteFoods= {deleteFoods} key= {food.name}/>
          )
        })}
        </Row>}

      {/* <Row style={{ width: '100%', justifyContent: 'center' }}>
        {showFoods.map(food => {
          return (
            <FoodBox food = {food} deleteFoods= {deleteFoods} key= {food.name}/>
          )
        })}
      </Row> */}
    </div>
  );
}

export default App;
