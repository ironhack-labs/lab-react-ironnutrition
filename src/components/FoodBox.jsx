function FoodBox(props) {
  return (
    <div>
      <p>{props.name}</p>

      <img src={props.image} width="200" height="auto" />

      <p>Calories: {props.calories}</p>
      <p>Servings {props.servings}</p>

      <p>
        <b>
          Total Calories: {props.servings} * {props.calories}{" "}
        </b>{" "}
        kcal
      </p>
   
      <button onClick={function(){
        props.cbDeleteFood(props.id)
      }} >Delete</button>
    </div>
  );
}

export default FoodBox;
