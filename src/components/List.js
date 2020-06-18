import React, {Component} from 'react'


export default function List(props) {

    
    return (
        <div>
            <h1>Today's Food</h1>
            {
                props.foodList.map((item) => {
                return <p>{item.name}</p>
                
            })
            }
            

          </div>
    )
    
}