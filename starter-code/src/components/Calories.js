import React from 'react';

const Calories = (props) =>{
    let {added, total_calories}= props
    console.log(props);
    return (

        <div>
            Today's calories: {total_calories}
        </div>
    )
};

export default Calories;