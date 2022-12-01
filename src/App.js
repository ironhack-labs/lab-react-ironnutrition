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

    // const handleDelete = (name) => {
    //     console.log('clicked');
    //     const filteredFoodList = foodList.filter((food) => {
    //       return food.name !== name;
    //     });
    //     setFoodList(filteredFoodList);
    //   };


    return (
        <div className="App">

     {/* {allFoods.filter} */}

            <Search setQueryProp={setQuery}  query= {query}  />
            <Button onClick={() => setShowForm(!showForm)}>Show Form</Button>
            {showForm && (
                <AddFoodForm setFoodlist={setFoodlist} foodlist={foodlist} />
                )}
            <h2>Food List</h2>
            <div className='container'>
                {foodlist
                        .filter((food) => {
                            if (food.name.toLowerCase().includes(query.toLowerCase())) {
                           return food;
                           }
                       })
                        .map((oneFood) => (
                    <div key={oneFood.id}>
                        <FoodBox food={oneFood} deleteFood={deleteFood}/>
                    </div>
                ))}
            </div>
        </div>
    );
}



export default App;
