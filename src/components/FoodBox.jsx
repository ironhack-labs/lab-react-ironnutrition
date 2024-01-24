// Your code here
const FoodBox = (props) => {
    const { id, name, calories, servings, image, onDelete } = props;

    const totalCalories = (calories, servings) => {
        return calories * servings;
    }

    const deleteFood = () => {
        onDelete(id);
    }

    const imgStyle = {
        width: "25%",
    }

    return (
        <div style={{ border: 'solid' }}>
          <p>{name}</p>

          <img src={image} style={imgStyle} alt={image}/>

          <p>Calories: {calories}</p>
          <p>Servings {servings}</p>

          <p>
            <b>Total Calories: {totalCalories(calories, servings)}</b> kcal
          </p>

          <button onClick={deleteFood}>Delete</button>
        </div>
    );
};

export default FoodBox;