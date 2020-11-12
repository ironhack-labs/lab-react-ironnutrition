import React, {Component} from "react";

class FoodBox extends Component {
    state={
      quantity:1
    }
    render(){
        console.log(this.props.food)
        const {name, image, calories, quantity} = this.props.food;
        
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Calories</th>
                        <th>Image </th>
                        <th>Quantity </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th> {name}</th>
                        <th>{calories}</th>
                        <th> <img src={image} alt="" style={{ width: 100 }} /></th>
                        <th> {quantity}</th>
                        <button className="button is-info">
                            +
          </button>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
}




export default FoodBox;