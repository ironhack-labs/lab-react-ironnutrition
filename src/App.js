import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Foods from './components/Foods'

function App() {
  return (
    <div className="container">
        <h1 className="title">IronNutrition</h1>
        <Foods/>
    </div>
  );
}

export default App;
