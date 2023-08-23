function FoodBoox(props){
    const {onlyFood, deleteBtn} = props;

    return(
        <div>
            <p>{onlyFood.name}</p>
            <img src={onlyFood.image} />
            <p>Calories: {onlyFood.calories}</p>
            <p>Servings {onlyFood.servings}</p>
            <p>
                <b>Total Calories: {onlyFood.servings} * {onlyFood.calories} </b> kcal
            </p>
            <button onClick={() => {deleteBtn(onlyFood.id)}}>Delete</button>
        </div>
    );
}

export default FoodBoox;