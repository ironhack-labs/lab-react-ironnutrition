import React from 'react';
import { useState } from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import './App.css';
import FoodBox from './components/FoodBox';
import Form from './components/Form';
import Search from './components/Search';

function App() {
  const [newFood, setNewFood] = useState(foods);
  const [activeForm, setActiveForm] = useState(false);
  const [searchFood, setSearchFood] = useState(newFood);

  function showForm() {
    setActiveForm(true);
    console.log(Form.prueba);
  }
  return (
    <>
      <button onClick={() => showForm()}>Add new food</button>
      <Search searchFood={searchFood} setSearchFood={setNewFood} />
      {activeForm ? (
        <Form
          addSearch={setSearchFood}
          addFood={newFood}
          setAddFood={setNewFood}
          changeActive={setActiveForm}
        />
      ) : (
        <> </>
      )}
      <FoodBox setFoods={setNewFood} foods={newFood} />
    </>
  );
}

export default App;
