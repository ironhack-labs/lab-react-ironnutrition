import React from 'react';
import { useState } from 'react';
import foods from './foods.json';
import './App.css';
import FoodBox from './components/FoodBox';
import { List } from 'antd';

function App() {
    const [dishes, setDishes] = useState(foods);

    return (
        <div className="App">
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
