import FoodsItem from "../FoodsItem/FoodsItem";
import './FoodsList.css'

const FoodsList = ({foods, onDeleteFood}) => {
    const hasFoods = foods && foods.lenght > 0

    return (
    <div className={`FoodsList ${hasFoods ? 'row row-cols-1 row-cols-md-2 g-4' : ''}`}>
      {foods && foods.length > 0 
        ? foods.map(food=> (
            <div key={food.id} className="col">
                <FoodsItem
                onDelete={onDeleteFood}
                {...food}
                />
            </div>
        )) 
        : (
          <p>There are no foods to show</p>
        )}
    </div>
    )

}


export default FoodsList;