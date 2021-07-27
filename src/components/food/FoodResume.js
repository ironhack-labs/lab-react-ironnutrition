import React, { Component } from "react";

class FoodResume extends Component {

    render(){
        const {name, calories, quantity, onClickDelete} = this.props
        
        return(
          
                <>
                    <tr>
                        <td ><strong>{name}</strong></td> 
                        <td ><small>{quantity}</small></td>
                        <td ><small>{calories}</small></td>
                        <td><small><i class="fas fa-trash-alt" role="button" onClick={() => onClickDelete(name)}></i></small></td>
                    </tr>                     
               
                </>                
           
        )
    }

}

export default FoodResume