import React, { useState, useEffect } from 'react';

// DATA
import foodArray from './food.json';

// COMPONENTS
import { FoodBox } from './components/FoodBox';
import { AddFoodModal } from './components/AddFoodModal';
import { TodayFood } from './components/TodayFood';

export const App = () => {

    const [food, setFood] = useState([]);
    const [query, setQuery] = useState('');
    const [todayFood, setTodayFood] = useState([]);
    const [modalVisibility, setModalVisibility] = useState(false);

    useEffect(() => {
        const filter = foodArray.filter(f => f.name.toLowerCase().includes(query.toLowerCase()));
        setFood(filter);
    }, [query]);

    const handleAddFood = (data) => {
        let newFood = [...food, data];
        setFood(newFood);
    }

    return (
        <div>
            <AddFoodModal
                visibility={modalVisibility}
                setVisibility={setModalVisibility}
                onFormSubmit={data => handleAddFood(data)}
            />
            <div className="container">
                <header className="app-header">
                    <h1 className="title">IronNutrition</h1>
                    <button className="button is-primary" onClick={() => setModalVisibility(!modalVisibility)}>
                        <span className="icon">
                            <span className="icon-add">+</span>
                        </span>
                        <span>Add Food</span>
                    </button>

                    <div className="field search-bar">
                        <div className="control">
                            <input
                                className="input"
                                id="search"
                                name="search"
                                type="search"
                                placeholder="Filter by food name..."
                                value={query}
                                onChange={e => setQuery(e.target.value)} />
                        </div>
                    </div>
                </header>
                <div className="columns">
                    <div className="column is-three-quarter food-list">
                        {food.length && food.map((f, i) => {
                            return <FoodBox key={i} food={f} todayFood={todayFood} setTodayFood={setTodayFood} />
                        })}
                    </div>
                    <TodayFood todayFood={todayFood} setTodayFood={setTodayFood} />
                </div>
            </div>
        </div>
    )
}