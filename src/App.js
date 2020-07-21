import React, { useState }  from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import AddFood from './components/AddFood';
import Search from './components/Search';
import foods from './foods'

function App() {
  const foodsInitial = {
    items: foods
  }
  const [foodList, setFood] = useState(foodsInitial)
  return (
    <div className='App'>
      <h1 className="title is-1">IronNutrition</h1>
      <Navbar/>
      <Switch>
        <Route exact path='/'>
          <Search foods={foodList}/>
        </Route>
        <Route exact path='/add'>
          <AddFood foods={foodList} setFood={setFood}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
