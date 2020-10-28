import React, { Component } from 'react'

export default class TodaysFoods extends Component {
    render() {
        const { foods } = this.props;
        let totalCalories = 0;
        return (
            <div className="content right-column">
                <h3>Today's Foods</h3>
                <dl>
                    {
                        foods.map((elem, i) => {
                            totalCalories += elem.calories * elem.quantity
                            return <li key={"today" + i}>
                                {elem.quantity} x {elem.name} = {elem.calories * elem.quantity} cal
                                <span onClick={() => { this.props.onDeleteTodaysFood(elem.name) }} className="icon is-small my-icon">
                                    <i className="far fa-trash-alt"></i>
                                </span>
                            </li>
                        })
                    }
                </dl>

                <p>Total: {totalCalories} calories</p>
            </div>
        )
    }
}
