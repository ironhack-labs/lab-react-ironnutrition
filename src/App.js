import React from 'react';
import { useState } from 'react';
import foods from './foods.json';
import './App.css';

function App() {
    const [dishes, setDishes] = useState(foods);

    return (
        <div className="App">
            {dishes.map(dish => (
                <div>
                    <p>{dish.name}</p>
                    <img src={dish.image} width={60} />
                </div>
                )
            )}
        </div>
    );
}

export default App;
