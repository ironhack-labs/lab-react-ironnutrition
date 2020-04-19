import React, { Component } from 'react';
import './TodaysFood.css';

class TodaysFood extends Component {
    render() {
        const { foods, deleteFoodFromTodayList } = this.props;
        const filteredFoods = foods.filter(food => food.quantity > 0);
        let total = 0;

        filteredFoods.forEach(food => {
            total += food.quantity * food.calories;
        });

        return (
            <div>
                <h2 className='TodaysFood-h2'>Today's Food</h2>
                <ul className='TodaysFood-ul'>
                    {filteredFoods.map((food, index) => (
                        <li className='TodaysFood-li' key={index}>
                            <div className='TodaysFood-li-flex'>
                                <p>{food.quantity} {food.name} = {food.quantity * food.calories} cal</p>
                                <button className='TodaysFood-delete-button' onClick={() => deleteFoodFromTodayList(food.name)}><i className="fa fa-trash"></i></button>
                            </div>
                        </li>
                    ))}
                </ul>
                <p><b>Total: {total} cal</b></p>
            </div>
        );
    }
}

export default TodaysFood;