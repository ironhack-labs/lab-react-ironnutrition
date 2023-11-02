let FoodBox = (props) => {
    let food = props.food
    let total= (food.calories*food.servings)
    let foods = props.foods
    let setFoods = props.setFoods

    let delBtn = () =>{
        let newFoods=[...foods];
        if(foods.includes(food)){
            newFoods.splice(foods.indexOf(food),1)
        }
        setFoods(newFoods)        
    }

    return(
            <div>
                <p>{food.name}</p>

                <img className="food-img"src={food.image} />

                <p>Calories: {food.calories}</p>
                <p>Servings: {food.servings}</p>

                <p>
                    <b>Total Calories: {total} </b> kcal
                </p>

                <button onClick={delBtn}>Delete</button>
            </div>
        )
}

export default FoodBox;