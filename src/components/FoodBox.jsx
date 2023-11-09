function FoodBox(props){
   
    // console.log(props.food.name)
    // console.log(props.index)
    return (
        <div>
           
        <p>{props.food.name} </p>

        <img 
            src={props.food.image} 
            alt="food image"
            width="auto"
            height="200px"
            
        />

        <p>Calories: {props.food.calories} </p>
        <p>Servings: {props.food.servings} </p>

        <p>
            <b>Total calories: {props.food.servings * props.food.calories} </b>
        </p>

        <button
             onClick={()=>{
                props.deleteFood(props.food.id);
                }}>
                Delete
        </button>
    </div>
    );
}

export default FoodBox;