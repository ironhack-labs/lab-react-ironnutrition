import React from 'react'

const CartList = ({ list, onDelete }) => {
    return (
        <ul>
            { list.map(item =>{
                return ( 
                    <li 
                        key={ item.name.split(' ').join('') } 
                    >
                        { item.quantity } { item.name } - { item.calories } cal
                        <button className="button is-small is-danger is-inverted" onClick={ () => onDelete(item.name) }>Delete</button>
                    </li> 
                )
            }) }
        </ul>
    )
}

export default CartList
