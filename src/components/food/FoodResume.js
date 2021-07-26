import React, { Component } from "react";

class FoodResume extends Component {

    render(){
        const {name, calories, image,} = this.props
        
        return(
            <div>
                
                    <li>
                        <ul>
                            <li><strong>{name}</strong></li> 
                            <li><small>{calories}</small></li>
                        </ul>                       
                   </li>

                
            </div>
        )
    }

}

export default FoodResume