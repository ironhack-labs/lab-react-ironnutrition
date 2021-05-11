import React from 'react'
import './App.css';
import { Route, Switch } from 'react-router';
import Home from './Components/Home/Home';

function App() {
  
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  )
}

export default App;