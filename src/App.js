import React from 'react';
import logo from './logo.svg';
import './App.css';

//components
import FoodCardContainer from './components/FoodCardContainer';
import Header from './components/Header'


function App() {
  return (
    <div className="App">
        <header> 
          <Header/>
        </header>
        <main>
          <FoodCardContainer/> 
        </main>
    </div>
  );
}

export default App;


