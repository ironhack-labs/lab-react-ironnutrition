import React, {useState} from 'react';

const Cart = (props) => {

    let list = '';
    let totalCalories = 0;

    if(props.cartList.length > 0){
        list = props.cartList.map(item => {
            totalCalories+=item.calories
            return (<li>{item.quantity} {item.name} = {item.calories} cal</li>)
        })
    }

    return (
        <div className="box cart-box">
            <h2 className="title">Today's Food</h2>
            <ul id="cartList" className="cart-box_list">
            {list}
            </ul>
            <hr />
            <p>Total: {totalCalories} cal</p>
        </div>
    )
}

export default Cart;