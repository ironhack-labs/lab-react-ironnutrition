import React, { useState }  from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import 'bulma/css/bulma.css';
import Foodbox from './Foodbox'
import AddForm from './AddForm'
import foods from './foods.json';


function App() {

  const initialFoodList = {
    foodList: [...foods]
  }

  const initialFormState = {
    name: "",
    calories: 0,
    image: ""    
  }
  
  const [foodList, setFoodList] = useState(initialFoodList);
  const [formState, setFormState] = useState(initialFormState);

  const handleChange = ({ target }) =>
    setFormState(state => ({
      ...state,
      [target.name]: target.value,
    }));

  const handleSubmit = e => {
    e.preventDefault();
    setFoodList(state => ({
      ...state,
      foodList: [...state.foodList, formState],
    }));
  };

  return (
    <Switch>
      <Route exact path="/">
        <Foodbox foodList={foodList} />
      </Route>
      <Route exact path="/add">
        <AddForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          formState={formState}
        />
      </Route>
    </Switch>
  );
}

export default App;
