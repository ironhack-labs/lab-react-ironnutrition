const FoodBox = ({ food, setSnacks, snacks }) => {
  const deleteSnack = (snackToDelete) => {
    //calculat the new list of movies
    const newListOfSnacks = snacks.filter((snackies) => {
      // whenever I am deleting a snack, that snack equals to the particular id, so that it won't show up in the new array
      return snackies.name !== snackToDelete;
    });

    //update state
    setSnacks(newListOfSnacks);
  };

  return (
    <div className="foodBox">
      <h2 className="FBtitle"> {food.name} </h2>
      <img src={food.image} height={50} alt={food.name} />
      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>
      <p>
        <strong>Total Calories: ({food.servings * food.calories}</strong> kcal)
      </p>
      <button
        className="btn btn-danger"
        onClick={() => {
          deleteSnack(food.name);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default FoodBox;
