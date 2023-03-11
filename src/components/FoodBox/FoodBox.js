import "./FoodBox.css"

function FoodBox({ name, calories, image, servings }) {
    return (

        <div>
            <h3> {name} </h3>
            <img src={image} alt={name} width="100px" />
            <p> Calories :  {calories}</p>
            <p> servings : {servings} </p>
            <button> Delete </button>
        </div>


    );

}

export default FoodBox;

