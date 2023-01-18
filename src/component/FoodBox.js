function FoodBox(props) {
    const {name, calories, image, servings} = props.food

    return (
        <div>
            <p>{name}</p>
            
        
            <img src={image} alt="food" width="200px"/>
            <p>Calories: {calories} </p>
            <p>Servings: {servings} </p>
            <p>
                <b>Total Calories: {calories*servings} </b> kcal
            </p>
            <button onClick={() =>{ props.deleteFood(name)}}> Delete </button>
        </div>
    );
  }
  
  export default FoodBox;
  