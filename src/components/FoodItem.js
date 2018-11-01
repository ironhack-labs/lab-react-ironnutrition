import React, { Component } from 'react'

class FoodItem extends Component {

  handleDelete = () => {
    const {index} = this.props;
    this.props.handleDelete(index);
  }

  render() {
    const {food} = this.props;
    return (
      <div className="food-item">
        <li>{`${food.quantity} ${food.name} = ${food.calories * food.quantity} cal`}</li>
        <div className="img-container">
          <input type="image" src={process.env.PUBLIC_URL + "/images/trash.png"} alt="Trash icon" className="trash-icon" onClick={this.handleDelete}/>  
        </div>
      </div>
    )
  }
}

export default FoodItem;
