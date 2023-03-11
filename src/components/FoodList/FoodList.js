import React from 'react';
import FoodItem from '../FoodBox/FoodBox';

const FoodList = ({ food, onDeletedFood }) => {
    const hasFood = food && food.length > 0;

    return (

        <div>
            <h2 className='m-4'>Food List</h2>
            <div className={`PlacesList ${hasFood ? 'row row-cols-1 row-cols-md-3 g-3' : ''}`}>

                {food && food.length > 0
                    ? food.map(food => (
                        <div key={food.name} className="col mb-5">
                            <FoodItem
                                name={food.name}
                                calories={food.calories}
                                image={food.image}
                                servings={food.servings}
                                onDelete={onDeletedFood}

                            />
                        </div>
                    ))
                    : (
                        <p>There are no food to show</p>
                    )}
            </div>
        </div>
    )
};

export default FoodList;