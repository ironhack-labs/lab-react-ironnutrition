function TodayFood({ foods, deleteTodayFood }) {
  return (
    <div className="box mt-6">
      <h1 className="has-text-weight-bold is-size-2">Today's Food</h1>
      {foods.map((food, i) => {
        return (
          <div key={i} className="box columns is-align-items-center my-3">
            
            <div className="column">
                <img src={food.image} alt={food.name} />
            </div>
            <div className="column">
              <p className="is-size-4	">
                <span>{food.quantity} </span>
                {food.name}
                {food.quantity > 1 && 's'}
              </p>
              {!food.quantity ? '': <p>{food.calories * food.quantity} kcal</p>}
            </div>
            <div className="column">
              <button
                className="button is-danger"
                onClick={() => deleteTodayFood(food.name)}>
                Delete
              </button>
            </div>
          </div>
        );
      })}
      <h1 className="has-text-weight-bold is-size-4">
        Total ={' '}
        {foods
          .map((food) => food.quantity * food.calories)
          .reduce((acc, el) => acc + el, 0)}{' '}
        kcal
      </h1>
    </div>
  );
}

export default TodayFood;
