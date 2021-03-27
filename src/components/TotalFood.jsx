import React from 'react';

//function TotalFood (foods) 
 const TotalFood = ({foods}) =>
{ 

    return (

        <div className="column content">
        <h2 className="subtitle">Today's foods</h2>
        <ul>{
        
            foods.filter((food) => food.quantity > 0)
            .map ((food) => {
              return   <li key={food.name}>{food.quantity} {food.name} = {food.quantity * food.calories} cal</li>
            })
        }
            
            
       
       
        </ul>
        
        <strong>Total:{
        foods.reduce(( acc,food) =>{
            return acc + food.quantity * food.calories
        },0)
        } </strong>
      </div>

    )
};


export default TotalFood;