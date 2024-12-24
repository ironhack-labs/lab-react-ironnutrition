function FoodBox(props) {
  // console.log(props);
  const { foods, setFoods } = props;
//   console.log(foods);

    const handleDelete = (idToDelete) => {
        const stateClone = foods.filter((eachFood) => eachFood.id !== idToDelete);
        setFoods(stateClone);
    }

  return (
    <>
      {foods.map((eachFood) => {
        return (
          <div key={eachFood.id}>
            <p>{eachFood.name}</p>

            <img src={eachFood.image} />

            <p>Calories: {eachFood.calories}</p>
            <p>Servings {eachFood.servings}</p>

            <p>
              <b>Total Calories: {eachFood.servings * eachFood.calories} </b> kcal
            </p>

            <button onClick={() => handleDelete(eachFood.id)}>Delete</button>
          </div>
        );
      })}
    </>
  );
}

export default FoodBox;

//al final no hice el test, y me confundí con el commit. La iteración 2 y 3 iban emarcadas
//juntas en el commit, ya que me salté la parte del "test"