function FoodBox(props) {
  console.log("FoodBox Props:", props);
  const { food, deleteFood } = props;

  return (
    <div className="AddFood">
      <h4>Add Food</h4>
      {/* <form onSubmit={handleSubmit}> */}
      <label>{food.name}</label>
      {/* <input type="text" name="name" value={props.name} onChange={handleTitleInput} /> */}
      <img src={food.image}/>

      <label>Calories:{food.calories} </label>
      {/* <input
        type="number"
        name="calories"
        value={props.calories}
        onChange={handleDirectorInput}
      /> */}

      <label>Servings:{food.servings}</label>
      {/* <input
        type="number"
        name="servings"
        value={props.calories}
        onChange={handleOscarsInput}
      /> */}

      <p>
        <b>Total Calories: {food.calories * food.servings} </b> kcal
      </p>

      <button type="primary" onClick={()=> deleteFood(food.id)}>Delete 🗑️</button>
      {/* </form> */}
    </div>
  );
}

export default FoodBox;
