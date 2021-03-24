import React from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import Foods from './components/Foods/Foods'

function App() {
  return (
    <div className="App container-fluid">
      <h1>Iron Nutrition</h1>
        <Foods />

    </div>


  );
}

export default App;
