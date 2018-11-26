import React, {Component} from 'react';
import foods from '../../foods.json';
import FoodBox from "./FoodBox";

class Home extends Component{
    constructor(){
        super();
        this.state = {
            foods : foods
        }
    }


    render(){
        return(
            <div>
                {this.state.foods.map((ele, index) => {
                    return <FoodBox key={index} food={ele}/>
                })
                }
            </div>
        );
    }
}

export default Home;
