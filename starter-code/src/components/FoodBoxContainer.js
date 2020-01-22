import React, {Component} from "react"
import FoodBox from './FoodBox'

class FoodBoxContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      calories: this.props.calories,
      image: this.props.image,
      quantity: 1
    }
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
  }

  handleQuantityChange(event) {
    this.setState({
      quantity: event.target.value
    })
  }

  render() {
    let foodsArray = this.props.foods;
    return (
      <div className="container">
            {
              foodsArray.map((food, idx) => <FoodBox key={idx} {...food}/> )
            }
      </div>
    )
  }
}

export default FoodBoxContainer;