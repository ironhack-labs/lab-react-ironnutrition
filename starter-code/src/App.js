import React, { useState, useEffect } from 'react';

// DATA
import foodArray from './food.json';

// COMPONENTS
import { FoodBox } from './components/FoodBox';
import { AddFoodForm } from './components/AddFoodForm';

export const App = () => {

    const [food, setFood] = useState([]);
    const [formVisibility, setFormVisibility] = useState(false);
    const [query, setQuery] = useState('');

    useEffect(() => {
        const filter = foodArray.filter(f => f.name.toLowerCase().includes(query));
        setFood(filter);
    }, [query])

    const handleAddFood = (data) => {
        let newFood = [...food];
        newFood.unshift(data);
        setFood(newFood);
    }

    const toggleFormVisibility = (e, isVisible) => {
        setFormVisibility(isVisible);
    }

    return (
        <div className="container">
            <header className="app-header">
                <h1 className="title">IronNutrition</h1>
                <button className="button is-primary" onClick={e => toggleFormVisibility(e, !formVisibility)}>
                    <span className="icon">
                        <span className="icon-add">+</span>
                    </span>
                    <span>Add Food</span>
                </button>

                <div className="field search-bar">
                    <div className="control">
                        <input className="input" id="search" name="search" type="text" value={query} onChange={e => setQuery(e.target.value)} />
                    </div>
                </div>
            </header>
            <AddFoodForm
                isVisible={formVisibility}
                onFormSubmit={data => handleAddFood(data)}
            />
            <div className="columns">
                <div className="column is-three-quarter food-list">
                    {food.length && food.map((food, i) => {
                        return <FoodBox key={i} food={food} />
                    })}
                </div>
                <div className="column is-one-quarter food-added">
                    hola
                </div>
            </div>
        </div>
    )
}