// Your code here
function FoodBox(props) {

    return (

        props.foodsArr.map((foodsItem, i) => {

            return (
                <div>
                    <section className="food-item-box">
                        <p className="food-title">{foodsItem.name}</p>
                        <img src={foodsItem.image} />
                        <p>Calories: {foodsItem.calories}</p>
                        <p>Servings {foodsItem.servings}</p>
                        <p><b>Total Calories: {foodsItem.calories * foodsItem.servings}</b> kcal</p>
                        <button onClick={function() {props.callbackToDelete(foodsItem.name);
                        }}>Delete</button>
                    </section>
                </div>

            )
        })
    )
}

export default FoodBox;