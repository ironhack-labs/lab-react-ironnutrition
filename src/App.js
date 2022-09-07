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

    function deleteDish(dishName) {
        const updatedDishes = dishes.filter(dish => !(dish.name === dishName));
        const updatedBackup = backup.filter(dish => !(dish.name === dishName));
        
        setDishes(updatedDishes);
        setBackup(updatedBackup);
    }

    function filterDishes(event) {
        const searchInputString = event.target.value.toLowerCase();

        if (searchInputString === "") {
            //console.log(searchInputString);
            setDishes(backup);
        } else {

            const updateDishes = backup.filter(dish => dish.name.toLowerCase().includes(searchInputString));

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
                        <FoodBox delete={deleteDish} name={item.name} calories={item.calories} image={item.image} servings={item.servings} />
                    </List.Item>
                )}

                //{dishes.map(dish => <FoodBox name={dish.name} calories={dish.calories} image={dish.image} servings={dish.servings} />)}
            />
        </div>
    );
}

export default App;
