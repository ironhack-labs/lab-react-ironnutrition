import React from 'react';
import { useState } from 'react';
import foods from './foods.json';
import './App.css';
import FoodBox from './components/FoodBox';
import { List } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';

function App() {
    const [dishes, setDishes] = useState(foods);
    const [backup, setBackup] = useState(foods);

    function addNewDishes(newDishes){
        const updateDishes=[...dishes, newDishes]
        setDishes(updateDishes)
        setBackup([...updateDishes])
    }

    function filterDishes(event) {
        console.log(backup);
        const searchInputString = event.target.value;

        if (searchInputString === "") {
            //console.log(searchInputString);
            setDishes(backup);
        } else {

            const updateDishes = dishes.filter(dish => dish.name.includes(searchInputString));

            setDishes(updateDishes);
        }
    }

    return (
        <div className="App">
            <SearchBar filter={filterDishes} />
            <AddFoodForm addNewDishes={addNewDishes}/>
            <List
                itemLayout="vertical"
                dataSource={dishes}
                grid={{gutter: 16, column: 3}}
                header="Food List"
                renderItem={(item) => (
                    <List.Item>
                        <FoodBox name={item.name} calories={item.calories} image={item.image} servings={item.servings} />
                    </List.Item>
                )}

                //{dishes.map(dish => <FoodBox name={dish.name} calories={dish.calories} image={dish.image} servings={dish.servings} />)}
            />
        </div>
    );
}

export default App;
