import React, { Component } from 'react';

class List extends Component {
    render() {
        const {addedToList} = this.props;
        const totalCalories = addedToList.reduce((a, b) => a + (b["calories"] || 0), 0);
        return (
           <div>
                <ul>
                    {addedToList.map((food, index)=> {
                        const {name, calories, quantity} = food;
                        return (
                            <li key={index}>{quantity} uds. / {name} / {calories} calories</li>
                        );
                    })}
                </ul>
                <div>total: {totalCalories}</div>
           </div>
        );
    }
}

export default List;