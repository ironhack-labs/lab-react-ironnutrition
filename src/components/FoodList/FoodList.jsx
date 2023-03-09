import React from 'react';
import FoodItem from '../FoodItem/FoodItem';

const FoodList = ({food}) => {
    const hasFood = food && food.length > 0;

    return (

        <div className={`PlacesList ${hasFood ? 'row row-cols-1 row-cols-md-3 g-3' : ''}`}>

        {food && food.length > 0 
          ? food.map(food => (
            <div key={food.name} className="col mb-5">
              <FoodItem
                name={food.name}
                calories={food.calories}
                image={food.image}
                servings={food.servings}
                // {...food}
              />
            </div>
          )) 
          : (
            <p>There are no food to show</p>
          )}
      </div>
    )
};

export default FoodList;