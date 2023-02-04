import { useState, useEffect } from 'react';
import { Button } from 'antd';
import './App.css';
import foods from './foods.json'
import { FoodBox, AddFoodForm, SearchBar } from './components';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [word, setword] = useState('');
  const [hidden, setHiddent] = useState(false)

  const addFood = (newFood) => {
    //De la siguiente forma agregamos la nueva comida al arreglo sin utilizar push
    //[{...},{...}] => [...{...},{...},{...},{name:'Dorilocos',cal:0}]
    setFoodList(prevState => [...prevState, newFood]);
  }

  const onSearch = (word) => {
    setword(word)
  }

  //Por default trae el mounting/updating
  useEffect(()=> {
    console.log('Cantidad de comida',foodList.length)
}, [foodList.length])

  return (
    <div className="App">
      {!hidden &&
      <AddFoodForm 
      addFood = {addFood}
      />
      }
      <Button onClick={()=>setHiddent(!hidden)} style={{margin: '10px'}}>
        {!hidden ? 'Hide Form':'Add New Food'}
      </Button>
      <SearchBar 
        onSearch = {onSearch}
      />
      <h2>Food List</h2>
      {
        foodList.filter((itemFood) => itemFood.name.toLowerCase().includes(word.toLowerCase())).length?
        foodList.filter((itemFood) => itemFood.name.toLowerCase().includes(word.toLowerCase()))
        .map((food,index_food)=> (
      <FoodBox 
          key={index_food}
          {...food}
      />
        )):'No hay nada'
      }
    </div>
  );
}

export default App;
