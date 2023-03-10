import './FoodBox.css'

function FoodBox({ name, image, calories, servings }) {

    return ( 
        <div>
            <h3>{ name }</h3>
            <img src={ image } alt={ name } width='100px' />
            <p>Calories: { calories }</p>
            <p>Servings: { servings }</p>
            <button>Delete</button>
        </div>
    );
}

export default FoodBox;