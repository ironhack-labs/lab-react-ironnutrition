import React from 'react';

let id =0;

function OrderList(props) {
    console.log(props.foodOrder)
        if(props.foodOrder.length!==0){
            

            return <ul> {props.foodOrder.map((value, index) => 
      
                (<li  key={id++}>{value.quantity} {value.name} = {value.calories}</li>))
              }
 

              </ul>
        }
      else {
        console.log(props.foodOrder)
        
        return <ul></ul>
    }

    
  }

  export default OrderList;
 