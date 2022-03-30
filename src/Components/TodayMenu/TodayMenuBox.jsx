import React from "react"



const TodayMenuBox = ({ foods, deleteFood}) => {

    const calculateCalories = () => {

        return foods.reduce((acc, curr) => acc + (curr.calories*curr.quantity), 0)
    }


    return (
        <div className="TodayMenu list-group">
            <h1 className="is-size-3"><strong>Today's Food</strong></h1>
            <br />
            <ul>
                {foods && foods.length > 0 && (
                    foods.map((food) => (
                        <li key={food.id}>{food.quantity} {food.name} = {food.calories*food.quantity} cal 
                        <button style={{backgroundColor:'transparent',border:'none'}} 
                        className="button"
                        onClick={() => deleteFood(food.id)}><i className=" fa-solid fa-circle-xmark mb-3"
                        style={{color:'red'}}></i></button>
                        </li>
                    ))
                )}
            </ul>
                    <div>
                        <p>Total Calories to eat: {calculateCalories()} cal</p>
                    </div>
        </div>
    )
}

export default TodayMenuBox

