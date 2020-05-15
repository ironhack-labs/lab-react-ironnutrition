import React from 'react';
import './Cart.css';
import 'bulma/css/bulma.css';
import Button from '../Button/Button'

function Cart({cart,removeItem}) {
    const listOfItems  = cart.map((food,idx)=>{
        return(
        <li className='item-cart'>
            <div>
                {food.quantity} {food.name} = {food.quantity*food.calories} cal
            </div>
            <div className='space-pls'>
                <Button className='button is-small' method={function(){removeItem(idx)}}>-</Button>
            </div>
        </li>)
    })
    const total = cart.reduce((total,food)=>{return food.quantity*food.calories+total},0)
    return (
        <div className='cart'>
            <h3 className="title is-3">Today's food</h3>
            <div className='cart-list'>
                <ul className='list-items'>
                    {listOfItems}
                </ul>
            </div> 
            <h6 className="title is-6">Total: {total} cal</h6>
        </div>
        );
}

export default Cart;
