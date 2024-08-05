import './FoodBox.css'

const FoodBox = ({ foodInfo, deleteFood }) => {

    const { id, name, calories, image, servings } = foodInfo
    const totalCalories = servings * calories


    return (
        <article className='FoodBox'>
            <p>{name}</p>
            <img className='food-images' src={image} alt={name} />
            <p>Calories: {calories}</p>
            <p>Servings: {servings}</p>

            <p>
                <b>Total Calories: {totalCalories}</b> kcal
            </p>

            <button onClick={() => deleteFood(id)}>Delete</button>
        </article>
    )
}

export default FoodBox