function FoodBox(props){
    return (
        <div>
           { console.log(props.food[0].name)}
        <p>{props.food[0].name} </p>

        <img 
            src={props.food[0].image} 
            alt="food image"
            width="200px"
            height="200px"
            
        />

        <p>Calories: {props.food[0].calories} </p>
        <p>Servings: {props.food[0].servings} </p>

        <p>
            <b>Total calories: {props.food[0].servings * props.food[0].calories} </b>
        </p>

        <button>Delete</button>
    </div>
    );
}

export default FoodBox;