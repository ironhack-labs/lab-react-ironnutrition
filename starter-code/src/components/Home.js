import React, {Component} from 'react'
import FoodBox from "./FoodBox";
import foods from '../foods'

class Home extends Component {
    constructor(){
        super();
        this.state = {foods}
    }
    render(){
        return(
            <div>
                {this.state.foods.map(food => <FoodBox food={food}/>)}
            </div>
        )
    }
}

export default Home;