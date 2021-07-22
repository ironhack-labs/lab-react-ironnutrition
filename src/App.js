import React from 'react';
import './App.css';
import Foodbox from './components/Foodbox';
import 'bulma/css/bulma.css';


function App() {
  return (
    <div className="App">
    <h1 id="page-name">IronHack Nutrition</h1>
    <Foodbox className="foodbox"/>
    </div>
  );
}

export default App;
