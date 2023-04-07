// src/App.js
import './App.css';
import { useState } from 'react';
import foodsJson from './foods.json';
import { Row, Divider, Button } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  //foods=array  setFoods=funcao que atualiza array   foodsJson=estado inicial
  const [foods, setFoods] = useState(foodsJson);
  const [showForm, setShowForm] = useState(false);

  const buttonText = showForm ? 'Hide Form' : 'Add New Food';

  const toggleForm = () => setShowForm((prev) => !prev);

  return (
    <div className="App">
      {/* se showForm for true, renderiza addform */}
      {showForm && <AddFoodForm setFoods={setFoods} />}

      <Button onClick={toggleForm}> {buttonText} </Button>

      <Search setFoods={setFoods} />

      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        <FoodBox foods={foods} setFoods={setFoods} />
      </Row>
    </div>
  );
}
export default App;
