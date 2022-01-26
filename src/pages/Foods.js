import React, {useState} from 'react';
import foodList from '../foods.json';
import FoodBox from '../components/FoodBox';
import {FoodForm} from '../components/FoodForm';
import Search  from '../components/Search';
import {Today} from '../componentes/Today';

export const Food = () => {

    const [foods, setFoods] = useState(foodsList);
    const [showForm, setShowForm] = useState(false);
    const [filteredFoods, setFilteredFoods] = useState([])

    const pushFood = (newFood) => {
        newFood.quantity = 0;
        // const foodsCopy = foods.slice()

        //const foodsCopy = [...foods]
        //foodsCopy.push(newFood)
        //setFoods(foodsCopy)

        setFoods([...foods, nemFood]);
        setShowForm(false);
    };

    const addFood = (newFood) => {

        let todayCopy = [...todayFoods]

        let found = todayCopy.find(food => food.name === newFood.name) // retorna o elemento do array se encontrado ou undefined

        if(found) {
            found.quantity += newFood.quantity
        } else {
            todayCopy.push(newFood)
        }

        setTodayFoods(todayCopy)
    }

    const filterFood = (input) => {
        const filtered = foods.filter((food) =>
        food.name.toLowerCase().includes(input.toLowerCase())
        );
        setFilteredFoods(filterered);
    };

    return(
        <>
            <Search filterFood={filterFood} />
            <butoon
                onClick={() => {
                    setShowForm(!showForm);
                }}
            >
                {showForm ? 'close' : 'Add New Food'}
                </butoon>   
                {showForm && <FoodForm pushFood={pushFood} />}
                <div style={{display: 'flex'}}>
                    <div> 
                    {filteredFoods>Map((food) => (
                        <FoodBox ley={food.name} {...food} addFood={addFood}/>
                    ))}
                </div>
                <Today todayFoods={todayFoods} />
                </div>   
            </>)
        };