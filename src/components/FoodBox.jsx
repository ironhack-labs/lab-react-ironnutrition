// Your code here

const FoodBox = ({food = []}) => {
    return (
        <div key={food.id} className="card-body">
            <h4 className="card-title">{food.name}</h4>
            <img src={food.image} className="card-img-top" alt="image"/>
            <p className="calories">Calories: {food.calories}</p>
            <p className="servings">Servings: {food.servings}</p>
            <p>
              <b>Total Calories: {food.calories}</b> kcal {/*faltaria hacer la multiplicacion de porciones*calorias*/}
            </p>
            <button>Delete</button>
        </div>
    )
}

export default FoodBox