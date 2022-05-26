import React from 'react'
import uuid from 'react-uuid';

export default function TodaysFood(props) {
    const {food, removeTodayFood} = props;
    const total = food.reduce((acc, e) => {
        return acc + (e.calories * e.quantity)
    }, 0)
  
    return (
        <>
        <h2 className='todayFoodHeading'>Today's Food:</h2>
        {
            food.map(elem =>  {
                 return (<div key={uuid()} className="is-flex is-flex-direction-row is-justify-content-center mgt-small mgb-small">
                            <figure className='image is-64x64'>
                                <img src={elem.image} alt=""/>
                            </figure>
                            <p>{elem.quantity}u - {elem.name} - Calories/unit: {elem.calories} Total Calories: {elem.calories*elem.quantity}</p> 
                            <button className='btnMove delete is-medium' onClick={() => removeTodayFood(elem.name)}>REMOVE</button>
                        </div>)
                })
        }
        <h4 className='todayFoodFooter'>Total Calories: {total}</h4>
        </>

    )
}
