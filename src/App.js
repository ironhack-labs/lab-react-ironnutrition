import './App.css';
import foods from './foods.json';
import React, {useState} from 'react';
import FoodBox from './components/FoodBox';
import { Row, Divider } from 'antd'
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodList, setFoodList] = useState(foods)
  const [foodBackup, setFoodBackup] = useState(foods)
  const [hide, setHide] = useState(false)


  const addFoodFn = (datos) => {
    console.log(datos)
    const newFood = [...foodList, datos]
    setFoodList(newFood)
    setFoodBackup(newFood)
  }

  const searchFn = (term) => {
    // console.log(term)
    const matches = foodBackup.filter((food) => {
      return food.name.toLowerCase().includes(term.toLowerCase())
    })
    setFoodList(matches)
  }

  const deleteFood = (posición) => {
    console.log('Delete', posición)
    const newFoodList = [...foodList]

    newFoodList.splice(posición, 1)
    setFoodList(newFoodList)
    setFoodBackup(newFoodList)
  }

  const hideAdd = () => {
    // setHide(!hide)
    setHide((valorActual) => !valorActual)
  }

  return (
    <div className="App">
        
        {/* Add Food */}
        {!hide && <AddFoodForm addFoodFn={addFoodFn}/>}
        <button onClick={hideAdd}>{hide ? 'Add food' : 'Hide form'}</button>

        {/* Search */}
        <Search searchFn={searchFn}/>

        {/* FoodBox */}
        <Divider>Food List</Divider>
        <Row style={{ width: '100%', justifyContent: 'center' }} gutter={[10,10]}>
          {foodList.map(({name, calories, image, servings}, index) => {
            return (
              <FoodBox 
                name = {name}
                calories = {calories}
                image = {image}
                servings = {servings}
                key = {name}
                deleteFood = {deleteFood}
                index = {index}
              />
            )
          })}
          {foodList.length === 0 
          && 
          <div>
            <p>Opss! there is no content to show.</p>
            <img src='https://cdn-icons-png.flaticon.com/128/5058/5058062.png' alt=''/>
          </div>}
        </Row>
    </div>
  );
}

export default App;
