import React from 'react';
import FoodItem from './FoodItem'

function Foodbox(props) {
  return (
    
    <>
        {
            props.items.map((item, index) => {
                return <FoodItem item={item} key={index} onAdd={props.onAdd}/>
            })
        }

    </>

  );
}

export default Foodbox;
