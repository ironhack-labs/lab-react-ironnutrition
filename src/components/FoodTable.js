import React, {Component} from "react";


class FoodTable extends Component {
    state={
    name: '',
    quantity: '',
    image: '',
    calories: '',
}

render() {
return (
    <div>
        <form onSubmit={this.handleFormSubmit}>
            
            <label htmlFor="title">Name:</label>
            <input type="text" name="name" id="title" value={this.state.name} onChange={(e) => this.handleChange(e)}/>
            
            <label htmlFor="">Quantity:</label>
            <input type="text" name="quantity" value={this.state.quantity} onChange={(e) => this.handleChange(e)}/>

            <label htmlFor="">Image:</label>
            <input type="image" name="image" value={this.state.image} onChange={(e) => this.handleChange(e)}/>

            <label htmlFor="">Calories:</label>
            <input type="text" name="Calories" value={this.state.calories} onChange={(e) => this.handleChange(e)}/>

            <input type="submit" value="Submit"/>
        </form>
    </div>
);
}
}

export default FoodTable;
// addFood = () => {
  //   const moreFood = [...this.state.foods]
  //   const add = foods
  //     moreFood.push(add)
  //   
  // this.setState({
  //   foods:moreFood
  // })
  
  // }