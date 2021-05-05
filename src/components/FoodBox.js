import './FoodBox.css'

const FoodBox = ({ calories, image, name, quantity, addCart}) => {
    return (
        <div className="food-card">
            <img src={image} alt={name}></img>
            <h4>{name}</h4>
            <p>{calories}</p>
            <input className="input" type="text" value="1" />
            <button onClick={addCart}>+</button>
        </div>
    )
}

export default FoodBox