import React from 'react';
import './App.css';

//components
import FoodCardContainer from './components/FoodCardContainer';
import FoodInfoContainer from './components/FoodInfoContainer';
import Header from './components/Header'



function App() {
  return (
    <div className="App .container.is-fullhd">
        <header className="header__container"> 
          <Header/>
        </header>
        <main className="columns">
          <div className="column">
            <FoodCardContainer/> 
          </div>
          <div className="column">
            <FoodInfoContainer/>  
          </div>
        </main>
    </div>
  );
}

export default App;


