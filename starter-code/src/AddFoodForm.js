import React, { Component } from "react";

class AddFoodForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      calories: "",
      image: "https://realfood.tesco.com/media/images/RFO-1400x919-Korean-Style-Beef-Bibimbap-bd51f060-6cc9-4f29-b0f1-cc9f651fc2cf-0-1400x919.jpg",
      quantity: ""
    };
  }


  handleChange(event) {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  }


  handleFormSubmit = event => {
    event.preventDefault();
    this.props.addTheFood(this.state);
    this.setState({
      name: "",
      calories: "",
      image: "",
      quantity: ""
    });
  };

 



  render() {
    const {showForm} = this.state;
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Food Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />
          <label>Calories:</label>
          <input
            type="text"
            name="calories"
            value={this.state.calories}
            onChange={e => this.handleChange(e)}
          />
    
         
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }





}

export default AddFoodForm;