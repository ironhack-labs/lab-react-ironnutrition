import React, { Component } from 'react'
import FoodBox from './FoodBox';

export default class FoodList extends Component {
    render() {
        const {foods} = this.props;

        return (
            <div>
                {
                    foods.map((item, i) => {
                        return <FoodBox 
                        key={i}
                        item={item} 
                        onAddTodaysFood={this.props.onAddTodaysFood}
                        />
                    })
                }
            </div>
        )
    }
}
