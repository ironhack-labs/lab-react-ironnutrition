import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import 'bulma/css/bulma.css';
import Foodbox from './Foodbox'
import AddForm from './AddForm'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Foodbox} />
        <Route exact path="/food/add" component={AddForm} />
      </Switch>
    </div>
  );
}

export default App;
