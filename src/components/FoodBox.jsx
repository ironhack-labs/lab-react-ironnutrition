// Your code here
function FoodBox (props){

    const {food} = props;
    const {clickToDelete} = props;

    return(
        <div>
            <p>{food.name}</p>

            <img src={food.image} width = {200}/>

            <p>Calories: {food.calories}</p>
            <p>Servings {food.servings}</p>

            <p>
                <b>Total Calories: {food.servings * food.calories} </b> kcal
            </p>

            <button onClick={()=> clickToDelete(food.id)}>Delete</button>
        </div>
    )
}
export default FoodBox;