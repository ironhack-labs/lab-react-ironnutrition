import React from 'react';
import FoodBox from './FoodBox';


const ListFoodBox = (props) => {
  return (
    <div>
    {
      props.foods.map((element,index) => {
      return <FoodBox key={index} {...element}/>
      }) 
    }

  </div>  
  )
}

export default ListFoodBox;