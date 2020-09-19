import React, { useState } from "react"
import foods from "../foods.json"

function FoodBox(){
    const [name, setName] = useState("")
    const [calories, setCalories] = useState(0)
    const [image, setImage] = useState("")
    const [quantity, setQuantity] = useState(1)
    const [food, setFood] = useState(foods)
    const [showNewFood, setShowNewFood] = useState(false)
    const [serachFood, setSearchFood] = useState("")
    const [todayFood, setTodayFood] = useState([])
    const [totalCalories, setTotalCalories] = useState(0)

    function handleFormSubmit(e){
        e.preventDefault()
        setFood([...food, {name, calories, image}])
        setShowNewFood(!showNewFood)
    }

    function handleSearch(e){
        e.preventDefault()
        setFood([serachFood])
    }

    function addTodayFood(name, calories){
        setTodayFood([...todayFood, {name, calories}])
        setTotalCalories(totalCalories+calories)
    }

	return (
    	<div>
            {/* <form onSubmit={handleSearch}>
                <div className="field">
                    <div className="control">
                        <input className="input is-info" type="text" name="search" value={name} onChange={e => setSearchFood(e.target.value)} placeholder="Search some food"/>
                    </div>
                </div>
                <div className="field is-grouped">
                <div className="control">
                    <button className="button is-link">Search</button>
                </div>
            </div>
            </form> */}

            <button className="button is-info buttonmas" onClick={() => {setShowNewFood(true)}}>Add new food</button>
            {showNewFood && 
            <form onSubmit={handleFormSubmit}>
            <div className="field">
                <label className="label">Food</label>
                <div className="control">
                    <input className="input" type="text" name="food" value={name} onChange={e => setName(e.target.value)}/>
                </div>
            </div>

            <div className="field">
                <label className="label">Calories</label>
                <div className="control">
                    <input className="input" type="text" name="calories" value={calories} onChange={e => setCalories(e.target.value)}/>
                </div>
            </div>
            <div className="field">
                <label className="label">Image</label>
                <div className="control">
                    <input className="input" type="text" name="image" value={image} onChange={e => setImage(e.target.value)}/>
                </div>
            </div>
            <div className="field is-grouped">
                <div className="control">
                    <button className="button is-link">Submit</button>
                </div>
            </div>
            </form>}
            <div className="flex">
                <div>
                    {food.map((food, i ) => (
                        <div className="box" key={i}>
                        <article className="media">
                            <div className="media-left">
                                <figure className="image is-64x64">
                                    <img src={food.image} alt=""/>
                                </figure>
                            </div>
                            <div className="media-content">
                                <div className="content">
                                <p>
                            <strong>{food.name}</strong> <br />
                            <small>Calories: {food.calories}</small>
                                </p>
                                </div>
                            </div>
                            <div className="media-right">
                                <div className="field has-addons">
                                <div className="control">
                                    <input className="input" type="number" value={quantity} />
                                </div>
                                <div className="control">
                                    <button onClick={()=> {addTodayFood(food.name, food.calories)}} className="button is-info">
                                    +
                                    </button>
                                </div>
                                </div>
                            </div>
                            </article>
                        </div>
                    ))}
                </div>
                <div>
                    <h2 class="title">Today's foods</h2>
                    <ul>
                        {todayFood?.map((food, i) => (
                            <li key={i}>{food.name} = {food.calories} cal</li>
                        ))}
                    </ul>
                        <h4 class="subtitle is-4">Total: {totalCalories} cal</h4>
                </div>
            </div>
        </div>
    )
}

export default FoodBox