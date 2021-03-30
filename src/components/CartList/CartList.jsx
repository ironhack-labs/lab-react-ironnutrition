import React from 'react'
import './Cardlist.css'
const CartList = ({ list, onDelete }) => {
    return (
        <ul>
            { list.map(item =>{
                return (
                    <div className="eachFood" key={ item.name.split(' ').join('') } >
                    <p>
                        { item.calories } cal
                    </p> 
                    <p>
                        { item.quantity } { item.name } 
                    </p> 
                    <button className="button is-small is-danger is-inverted" onClick={ () => onDelete(item.name) }>Delete</button>
                    </div>
                )
            }) }
        </ul>
    )
}

export default CartList
