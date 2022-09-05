import './BoxFood.styles.css'
import { DeleteButton } from '../DeleteButton/DeleteButton'

export const BoxFood = (props) => {
 const {foodName, imgFood, calFood, sideFood, totalCalories, handleClick} = props
 return(
  <div className="box-food">
   <div className="name-food">
    <h2>{foodName}</h2>
   </div>
   <div className="about-food">
    <img src={imgFood} alt={imgFood} />
    <p>Calories: {calFood}</p>
    <p>Servings: {sideFood}</p>
    <h4>Total Calories: {totalCalories}</h4>
    <DeleteButton onClick={() =>handleClick(foodName)} />
   </div>
  </div>
 )
}