function foodBox(props) {
    return (
        <div className="Food">
            <div className="Food-top">
                <p>{props.food.name}</p>
                <img src={props.food.image} />
            </div>

            <div className="Food-bottom">
                <p>Calories: {props.food.calories}</p>
                <p>Servings {props.food.servings}</p>
                <p>
                    <b>Total Calories: {props.food.servings * props.food.calories} </b> kcal
                </p>
            </div>

            <button onClick={() => props.callbackToDelete(props.food.id)}>Delete</button>
        </div>
    );
}

export default foodBox;
