// Your code here
function FoodBox(props){
    return(
    <div>
        <p>{props.element.name}</p>
        <img src={props.element.image} />
        <p>Calories: {props.element.calories}</p>
        <p>Servings {props.element.servings}</p>
        <p>
            <b>Total Calories: {props.element.calories} * {props.element.servings} </b> kcal
        </p>
         <button onClick={() => {props.callBackFunction}}>Delete</button>
    </div>
    )
}

export default FoodBox;