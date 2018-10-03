import React, {Component} from 'react'
import 'bulma/css/bulma.css';
import FoodboxDisplay from "./FoodboxDisplay";


class FoodboxContainer extends Component {


    render(){
        return(
            <div>
                <h1>IronNutrition</h1>
                    <FoodboxDisplay/>
            </div>



        )
    }
}

export default FoodboxContainer