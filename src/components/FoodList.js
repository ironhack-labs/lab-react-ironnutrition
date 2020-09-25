import React from 'react';
import Foodbox from './FoodBox'

const FoodList = (props) => {
    return (
        <div className="column is-two-thirds">
            {
                props.foods.map((item, i) => {
                    return <Foodbox 
                                item={item} 
                                key={i}
                                id={i}
                                onAdd={props.onAdd}
                            />
                })
            }
        </div>
    )
}

export default FoodList