import React, { Component } from 'react'
import FoodRow from './FoodRow';

class FoodTable extends Component {
    render() {
        const foodDiv = [];
        const filterText = this.props.filterText;

        this.props.foods.forEach((food) => {
            if (food.name.toLowerCase().indexOf(filterText) === -1) {
                return;
              }
            foodDiv.push(
              <FoodRow
                food={food}
                key={food.name} />
            )
        })
        return (
            <section>
                <div>
                    {foodDiv}
                </div>
            </section>
        )
    }
}

export default FoodTable
