function FoodBox(props) {
  return (
    <div className="card">
      {props.item.name}
      <img src={props.item.image} height={60} alt="food" />
      <p>Calories: {props.item.calories}</p>
      <p>Servings: {props.item.servings}</p>
      <p>
        <b>
          Total Calories: {props.item.calories} * {props.item.servings}{' '}
        </b>{' '}
        kcal
      </p>
      <button  onClick={() => { props.callbackToDelete(props.item.name) }}> Delete </button>
    </div>
  );
}

export default FoodBox;
