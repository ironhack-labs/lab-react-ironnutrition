// Your code here

const FoodBox = ({food}) => {
    const {name, image, calories, servings, onClick} = food;
    const onDelete = () => {
        if (confirm(`Estas a punto de borrar la receta: ${food.name}`)) {
          food(id)
            .then(() => {
              navigate('/src/foods.json');
            })
            .catch((e) => console.error(e));
        }
      };

    return (
        <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <img src={image} className="card-img-top" alt="image"/>
            <p className="calories">Calories: {calories}</p>
            <p className="servings">Servings: {servings}</p>
            <p>
              <b>Total Calories: {calories * servings}</b> kcal {/*faltaria hacer la multiplicacion de porciones*calorias*/}
            </p>
            <button onClick={onDelete} className="btn btn-danger">Delete</button>
        </div>
    )
}

export default FoodBox