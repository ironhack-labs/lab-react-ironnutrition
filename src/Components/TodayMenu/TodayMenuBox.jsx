import React from "react"



const TodayMenuBox = ({ foods }) => {

    const calculateCalories = () => {

        return foods.reduce((acc, curr) => acc + curr.calories, 0)
    }

    return (
        <div className="TodayMenu list-group">
            <h1><strong>Today's Menu</strong></h1>
            <br />
            <ul>
                {foods && foods.length > 0 && (
                    foods.map((food) => (
                        <li>{food.name} = {food.calories} cal </li>
                    ))
                )}
            </ul>
            {foods && foods.length > 0 ? (
                <>
                    <br />
                    <div>
                        <p>Total Calories to eat: {calculateCalories()} cal</p>
                    </div>
                </>
            ) : (
                <div>
                    <p>Total Calories to eat: 0 cal</p>
                </div>

            )}
        </div>
    )
}

export default TodayMenuBox

