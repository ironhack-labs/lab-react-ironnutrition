import './App.css';
import foodsJson from './foods.json';
import FoodBox from "./components/FoodBox"
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search'
import {useState} from "react";
import {Row, Divider, Button} from 'antd';

function App() {
    const [foods, setFoods] = useState(foodsJson);
    const [filteredFoods, setFilteredFoods] = useState(foods)
    const [addFoodFormOpen, setAddFoodFormOpen] = useState(true)

    const addFood = (newFood) => {
        setFoods(prevFoods => [...prevFoods, newFood])
        setFilteredFoods(prevFilteredFoods => [...prevFilteredFoods, newFood])
    }

    const search = searchTerm => {
        setFilteredFoods(() => {
            if (!searchTerm){
                return foods
            }
            const filteredArray = foods.filter(food => {
                const name = food.name.toLowerCase()
                return name.includes(searchTerm.toLowerCase())
            })
            return filteredArray
        })
    }

    const deleteFood = food => {
        const newFoods = foods.filter(el => food.name !== el.name) 
        setFoods(newFoods)
        setFilteredFoods(newFoods)
    }

    return (
        <div className="App">
            <h1>Food</h1>
            <h2>We have {foods.length} recipes!</h2>

            <AddFoodForm addFood={addFood} isOpen={addFoodFormOpen} />
            <Button onClick={() => {
                setAddFoodFormOpen(isOpen => !isOpen)
            }}>{addFoodFormOpen ? "Hide Form" : "Add New Food"}</Button>

            <Search search={search} />

            <Divider>Food List</Divider>
            <Row style={{width: '100%', justifyContent: 'center'}}>
                {filteredFoods.map((food, index) => <FoodBox food={food} deleteFood={deleteFood} key={index} />)}
            </Row>
            
            <p style={{display: foods.length === 0 ? "block" : "none"}}>This section is empty.</p>
            <p style={{display: foods.length > 0 && filteredFoods.length === 0 ? "block" : "none"}}>No results for your search term.</p>
        </div>
    );
}

export default App;
