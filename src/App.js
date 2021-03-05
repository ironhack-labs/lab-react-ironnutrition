import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import FoodBox from './components/food-box/FoodBox';

function App() {
    return (
        <div className="App">
            <div className="container">
                <FoodBox />

            </div>
        </div>
    );
}

export default App;
