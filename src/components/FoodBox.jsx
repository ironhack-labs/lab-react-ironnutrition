function FoodBox(props) {

const {id, name, image, calories, servings} = props.food;
const DeleteItem = props.DeleteItem;

  return (
    <div className="FoodBox">
      <p>{name}</p>

      <img src={image} />

      <p>Calories: {calories} </p>
      <p>Servings {servings}</p>

      <p>
        <b>Total Calories: {servings * calories} </b> kcal
      </p>

      <button onClick={()=>DeleteItem(id)}>Delete</button>
    </div>
  );
}

export default FoodBox;