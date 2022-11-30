import './App.css';
import foods from "./foods.json";
import { useEffect, useState } from 'react';
import FoodBox from './FoodBox';
import { Row, Divider, Button } from 'antd';
import AddFoodForm from './AddFoodForm';
import SearchFood from './SearchFood';

function App() {
  const [displayedFoods, setDisplayedFoods] = useState(foods);
  const [query, setQuery] = useState("");
  const [shown, setShown] = useState(false);

  const addFood = (newFood) => {
    setDisplayedFoods([newFood, ...displayedFoods]);
  }

  const deleteFood = (name) => {
    let filteredFoods = [...displayedFoods].filter((food) => {
      return food.name !== name;
    })
    setDisplayedFoods(filteredFoods);
  }

/*
  useEffect(() => {
    const handleSearch = e => {
      if (!e.target.value){
        setDisplayedFoods(foods);
      }
      else {
        setQuery(e.target.value);
        let filteredFoods = [...displayedFoods].filter((food) => {
          return food.name.toLowerCase().includes(query.toLowerCase());
        })
        setDisplayedFoods(filteredFoods);
      }      
    };

    handleSearch();
  }, [query])
*/

  const handleSearch = (e) => {
    if (!e.target.value){
      setDisplayedFoods(foods);
    }
    else {
      setQuery(() => e.target.value);
      let filteredFoods = [...displayedFoods].filter((food) => {
        return food.name.toLowerCase().includes(e.target.value.toLowerCase());
      })
      setDisplayedFoods(filteredFoods);
    }      
  }

 
  const toggle = () => {
     setShown(!shown)
  };

  return (
    <div className="App">
      {shown && <AddFoodForm addFood={addFood} />}
      <Button onClick={ toggle }> {shown ? "Hide Form" : "Add New Food"} </Button>
    
      <SearchFood useEffect={useEffect} handleSearch = {handleSearch}/>

      <Divider>Food List</Divider>
      
      {displayedFoods.length === 0 && "Oops, there is no more content to show."}
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        <FoodBox foods={ displayedFoods } deleteFood={ deleteFood } />
      </Row>
      


    </div>
  );
}

export default App;
