import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import FoodList from './components/food-list/FoodList';

function App() {
    return (
        <div className="App">
            <div className="container">
                <FoodList />
            </div>
        </div>
    );
}

export default App;
