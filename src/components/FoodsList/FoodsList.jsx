import FoodsItem from "../FoodsItem/FoodsItem";

const FoodsList = ({foods}) => {
    const hasFoods = foods && foods.lenght > 0

    return (
    <div className={`FoodsList ${hasFoods ? 'row row-cols-3 row-cols-md- g-4' : ''}`}>
      {foods && foods.length > 0 
        ? foods.map(food => (
          <div key={food.id} className="col">
            <FoodsItem
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