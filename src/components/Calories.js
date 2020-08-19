import React        from 'react'
import CalorieItem  from './CalorieItem'

function Calories(props){
    return (
        <div>
            <h4 className="title is-4">Today's foods</h4>
            <ul>
                {
                    props.todaysFoods.map((food, i) => {
                        return <CalorieItem
                                key={i} 
                                food={food}
                                id={i}
                                onDelete={props.onDelete}
                                />
                    })
                }
                
            </ul>
            <h6 className="title is-6">Total: {props.total} cal</h6>
        </div>
    )
}

export default Calories;