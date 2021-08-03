import React, {useState, useEffect} from 'react'
import 'bulma/css/bulma.css';
import FoodBox from './FoodBox';
import foods from '../foods.json';

function FoodList (){
    const [foodList, setFood] = useState(foods)
    const [display, setDisplay] = useState(false)
    const [buttonText, setText] = useState("Show form")
    const [newName, setName] = useState("")
    const [calories, setCalories] = useState(0)
    const [image, setImage] = useState("")
    const [addFood, setAddFood] = useState([])
    const [total, setTotal] = useState(0)

    const handleAdd = (newFood) => {
        addFood.push(newFood)
        setAddFood(addFood)
        let sum = total
        addFood.forEach(food => sum = total + food.calories)
        setTotal(sum)
    }

    const handleForm = () => {
        if(display){
            setDisplay(false)
            setText("Show form")
        } else {
            setDisplay(true)
            setText("Hide form")
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        switch (name) {
            case "name": setName(value); break;
            case "calories": setCalories(value); break;
            case "image": setImage(value); break;
        }
    }

    const handleSubmit = () => {

        const newFood = {
            name: newName,
            calories: calories,
            image: image,
            quantity: 0
        }
        foods.push(newFood)
        setFood(foods)
    }

    const handleSearch = (e) => {
        const {value} = e.target
        const filterFood = foods.filter(food => food.name.includes(value))
        if(filterFood.length > 0){
            setFood(filterFood)
        } else {
            setFood(foods)
        }
    }

    const showForm = () => {
        if(display) {
        return (
            <section>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input className="input" onChange={handleChange} name="name" type="text" placeholder="waffles" />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Calories</label>
                    <div className="control">
                        <input className="input" name="calories" type="number" placeholder="100" onChange={handleChange}/>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Image</label>
                    <div className="control">
                        <input className="input" name="image" type="text" placeholder="https://i.imgur.com/DupGBz5.jpg" onChange={handleChange}/>
                    </div>
                </div>

                <div className="control">
                    <button className="button is-primary" onClick={handleSubmit}>Submit</button>
                </div>
            </section>
        )
        }
    }

    return(
        <section>
            <label className="label">Search</label>
            <div className="control">
                <input className="input" name="search" type="text" onChange={handleSearch}/>
            </div>
        
            <div className="control">
                <button className="button is-primary" onClick={handleForm}>{buttonText}</button>
            </div>
        {
            showForm()
        }
            <div className="columns">
                <div className="column">
                {
                    foodList.map((food, index) => (
                        <FoodBox
                            key={index}
                            name={food.name}
                            calories={food.calories}
                            image={food.image}
                            handleAdd={handleAdd}
                        />
                    ))
                }
                </div>
                <div className="column content">
                    <h2>Today´s Foods</h2>
                    <ul>
                        {
                            addFood.map((data, index) => (
                                <li key={index}>{data.quantity} {data.name} = {data.calories} cal</li>
                            ))
                        }  
                    </ul>
                    <span>Total:{total} cal</span>
                </div>
            </div>
        </section>
    )
}

export default FoodList