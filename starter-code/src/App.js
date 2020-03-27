import React, { useState, useEffect } from 'react';

// DATA
import foodArray from './food.json';

// COMPONENTS
import { AddFoodModal } from './components/AddFoodModal';
import { Header } from './components/Header';
import { Search } from './components/Search';
import { FoodList } from './components/FoodList';
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
                <Header
                    modalVisibility={modalVisibility}
                    setModalVisibility={setModalVisibility}
                />
                <Search
                    query={query}
                    setQuery={setQuery}
                />
                <div className="columns is-desktop is-multiline">
                    <FoodList food={food} todayFood={todayFood} setTodayFood={setTodayFood} />
                    <TodayFood todayFood={todayFood} setTodayFood={setTodayFood} />
                </div>
            </div>
        </div>
    )
}