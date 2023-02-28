
import {Button} from 'antd'



const FoodBox = ({name, calories, servings, image, onDelete}) => {
   
    return (
        <div>
            <img src={image} alt={name} width='290px'></img>
            <p>Calories:{calories}</p>
            <p>Servings:{servings}</p>
            <p> <strong>Total Calories:</strong>{calories}kcal</p>
            <Button type='submit' onClick={() => onDelete()}>Delete</Button>

        </div>
    )
}

export default FoodBox

