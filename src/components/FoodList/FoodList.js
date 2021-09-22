import React, {Component} from "react";
import './FoodList.css'

class FoodList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            foods: this.props.food
         }
    }

    componentDidUpdate(previousProps){
        if (previousProps !== this.props){
            this.setState({
                foods: this.props.food
            })
        }
    }

    render() { 
        return ( 
            <div className="todays-foods">
                <h1 className="title">Today's foods</h1>
                <ul>
                    {this.state.foods.map((food) => {
                        return <li>{food.quantity} {food.name} = {food.quantity * food.calories} calories </li>
                    })}
                </ul>

                <hr />

            </div>
         );
    }
}
 
export default FoodList;