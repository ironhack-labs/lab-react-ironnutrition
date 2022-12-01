import { useState } from 'react';
import './App.css';
import foodsJSON from './foods.json'
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import { Card, Row, Col, Divider, Input, Button } from 'antd';


function App() {


    const allFoods = foodsJSON.slice()
    const [foodlist, setFoodlist] = useState(allFoods)
    // const [foods, setFoods] = useState(foodsJSON)
    const [query, setQuery] = useState("")
    const [showForm, setShowForm] = useState(false);

    function deleteFood(name) {
        const filteredFoodlist = foodlist.filter((food) => {
            return food.name !== name;
        });
        return setFoodlist(filteredFoodlist)
    }


    return (
        <div className="App">

            <Search setQueryProp={setQuery} query={query} />
            <Button onClick={() => setShowForm(!showForm)}>Show Form</Button>
            {showForm && (
                <AddFoodForm setFoodlist={setFoodlist} foodlist={foodlist} />
            )}
             <Divider>Food List</Divider>
            <div className='container'>
                
                <Row style={{ width: '100%', justifyContent: 'center' }}>
                {foodlist
                    .filter((food) => {
                        if (food.name.toLowerCase().includes(query.toLowerCase())) {
                            return food;
                        }
                    })
                    .map((oneFood) => (
                        <div key={oneFood.id}>
                            <FoodBox food={oneFood} deleteFood={deleteFood} />
                        </div>
                    ))}
                    </Row>
            </div>
        </div>
    );
}



export default App;
