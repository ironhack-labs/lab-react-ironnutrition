function TodayFood({ foods, deleteTodayFood }) {
  return (
    <div className="box mt-6">
      <h1 className="has-text-weight-bold is-size-2">Today's Food</h1>
      {foods.map((food, i) => {
        return (
          <div key={i} className="box">
            <p className="is-size-4	"><span>{food.quantity} </span>{food.name}</p>
            {!food.quantity ? '' : <p>{food.calories * food.quantity} kcal</p>} 
            <button className="button is-danger" onClick={() => deleteTodayFood(i)}>Delete</button>
          </div>
          
        );  
      })}
      <h1 className="has-text-weight-bold is-size-4">Total = {foods.map(food => food.quantity * food.calories).reduce((acc, el) => acc + el, 0)} kcal</h1>
      
    </div>
  );
}

export default TodayFood;
