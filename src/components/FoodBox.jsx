function FoodBox(props) {
    
/*return (
    <div> 
        <p> {props.food.name}</p>
        <img src={props.food.image} />
        <p>Calories : {props.food.calories}</p>
        <p>Servings {props.food.servings}</p>

        <p> 
            <b> Total calories {props.food.servings}*{props.food.calories}</b>kcal 
        </p>
        <button>Delete</button>
    </div>
)
}*/ 

return props.foodArray.map(function(foodObject, index){
    return (
        <div>
        <p> {props.foodArray[index].name}</p>
        <img src= {props.foodArray[index].image}/>
        <p>Calories : {props.foodArray[index].calories}</p>
        <p>
        <b> Total calories {props.foodArray[index].servings}*{props.foodArray[index].calories}</b>kcal
        </p>

        <button onClick={function() {deleteItem(props.foodObject.id)}}>Delete</button>
        </div>

    )
}); 


export default FoodBox;
