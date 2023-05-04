import './App.css';
import { Row, Divider, Button } from 'antd';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/Foodbox';
import AddFoodForm from './components/AddFoodForm';
import SearchFood from './components/SearchFood';

function App() {
  const [totalFood, setTotalFoods] = useState(foods);
  const [food, setfoods] = useState(foods);
  const [showFood,setShowFood]=useState(false)


  function toggleShowForm(){
    setShowFood(!showFood)
  }

  function addNewFood(newFood){
    const addedFoods=[...food,newFood]
    const addedTotalFoods=[...totalFood,newFood]
    setfoods(addedFoods) 
    setTotalFoods(addedTotalFoods) 
  }

  function filterFood(alphabet){
    let filteredFood

    if(alphabet==="")
    {
      filteredFood=totalFood
    }
    else
    {
      filteredFood=totalFood.filter((data)=>{
        // console.log(alphabet.toLowerCase())
        return data.name.toLowerCase().includes( alphabet.toLowerCase())
      })
    }
    setfoods(filteredFood)
  } 

  function deleteFood(deleted){
    const filteredFood=food.filter(data=>{
      return data.name!==deleted
    })
    const filteredTotalFood=totalFood.filter(data=>{
      return data.name!==deleted
    })
    
    setfoods(filteredFood)
    setTotalFoods(filteredTotalFood)
  }
  return (
    <div className="App">

      {showFood&& <AddFoodForm addFood={addNewFood}></AddFoodForm> }
      <Button onClick={toggleShowForm}> {showFood?"Hide Form":"Add New Food "} </Button>


      {/* Display Search component here */}

      <SearchFood filter={filterFood}></SearchFood>

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {food.length>0?food.map((data) => {
          return (
            <FoodBox
              food={{data}} deleteFood={deleteFood}
            />
          );
        }): <h2>No More Content</h2>  }
    
      </Row>
    </div>
  );
}
export default App;
