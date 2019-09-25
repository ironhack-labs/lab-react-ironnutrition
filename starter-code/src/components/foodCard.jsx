
import React, { Component } from 'react';

class SingleFood extends Component {

    render() {
        return (
            <ul>
                {this.props.food.map((item, index) => {
                    return (
                        <li key={index}>
                            <h5>
                                {item.name}
                            </h5>
                            <p>
                                {item.quantity}
                            </p>
                            <p>{item.total}</p>
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default SingleFood;