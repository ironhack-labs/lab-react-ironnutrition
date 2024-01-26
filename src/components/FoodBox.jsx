import "../FoodBox.css"
// Your code here



function FoodBox(props) {
  return (
    <div>
      <div>
        <p>{props.food.name}</p>

        <img id="foodImg" src= {props.food.image}/>

        <p>Calories: {props.food.calories}</p>
        <p>Servings {props.food.servings}</p>

        <p>
          <b>Total Calories: {props.food.servings * props.food.calories} </b> kcal
        </p>

        <button onClick={()=> { console.log(props); props.deleteFood(props.food.id) }}>Delete</button>
      
      </div>
    </div>
  );
}

export default FoodBox;
