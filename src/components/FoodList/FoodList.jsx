import FoodBox from "../FoodBox/FoodBox"
import './FoodList.css'

const FoodList = ({ foods, handleDelete }) => {
    return (
        <div>
            {foods.length !== 0 ? foods.map((eachFood) =>
                <FoodBox
                    key={eachFood.id}
                    {...eachFood}
                    handleDelete={handleDelete}
                />
            ) : <p className="empty-list-message">Oops! There is no more content to show.</p>}
        </div>
    )
}

export default FoodList