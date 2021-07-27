import React, { Component } from "react";

class FoodResume extends Component {

    render(){
        const {name, calories, quantity,} = this.props
        
        return(
            <div>
                <li>
                    <ul className="columns is-desktop">
                        <li className="column"><strong>{name}</strong></li> 
                        <li className="column"><small>{quantity}</small></li>
                        <li className="column"><small>{calories}</small></li>
                    </ul>                       
                </li>                
            </div>
        )
    }

}

export default FoodResume