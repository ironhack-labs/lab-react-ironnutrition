import "./FoodBox.css"
function FoodBox(props) {
    const {name, calories, image, servings} = props.food

    return (
      <div className="food">
        <h4>{name}</h4>

        <div className="food-details">
        <div className="img-container">

          <img src={image} alt="food" />
        </div>
          <div className="food-texts">
            <p>Calories: {calories} </p>
            <p>Servings: {servings} </p>
            <p><b>Total Calories:<br />{calories * servings}{' '}</b>{' '}kcal</p>
            <button
              onClick={() => {
                props.deleteFood(name);
              }}
            >
              {' '}
              Delete{' '}
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default FoodBox;
  