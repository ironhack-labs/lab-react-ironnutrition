import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foodsArray from './foods.json';
import './App.css';
import { useState } from 'react';
import Foodbox from './components/Foodbox'
import AddFoodForm from './components/AddFoodForm';
import SearchForm from './components/SearchForm';

function App() {
  const [ foods, setFoods ] = useState(foodsArray);
  const [searchTerm, setSearchTerm] = useState('');
  const [showButton, setShowButton] = useState(false)

  const addFood = (newFood) => {
    const updatedFoods = [...foods, newFood]
    setFoods(updatedFoods)
  }

  const filter = () => {
    if (!searchTerm) {return foods}
    return foods.filter((items) => {const query = items.name.toLowerCase()
      return query.includes(searchTerm)
    })
  }

  const buttonHandler = () =>
     setShowButton(current => !current)

    return (
    <div className="App">
      <Button onClick={buttonHandler}>Hide Form / Add New Food</Button>

      {showButton && <AddFoodForm addFood={addFood}/> }

      <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {filter().length>0 ? <Foodbox value={filter()} setFoods={setFoods}/> : <strong style={{fontSize: 40}}>Nothing to show here!</strong>}
        
      </Row>
    </div>
  );
}

export default App;
