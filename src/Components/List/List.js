import React from 'react';
import 'bulma/css/bulma.css';

class List extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.children}</h1>
                <ul>
                    {this.fillListItems()}
                </ul>
                <p>Total: {this.calculate()} cal</p>
            </div>
        );
    }

    fillListItems() {
        return this.props.foods.map((e, index) => {
            return <li key={index}>{this.format(e)}</li>;
        });
    }

    format(e) {
        return e.quantity + " " + e.name + " = " + e.calories * e.quantity + " cal";
    }

    calculate() {
        return this.props.foods.reduce((total, atual) => total + atual.quantity * atual.calories, 0);
    }
}

export default List;
