import React from "react";

class AddFood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      calories: "",
      image: ""
    };
  }

  handleFormSubmit = (event) => {
    event.preventDefault(); //to not reload the page
    this.props.addFoodItem(this.state);
    this.props.toggleVisibility()
    this.setState({
      name: "",
      calories: "",
      image: ""
    })
  }

  handleNameInput = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleCaloriesInput = (event) => {
    this.setState({
      calories: event.target.value
    })
  }

  handleImageInput = (event) => {
    this.setState({
      image: event.target.value
    })
  }

  render() {
    return (
      <div className="add-food">
        <form onSubmit={this.handleFormSubmit}>
          <h1>Add food</h1>
          <div>
            <label>Name:</label>
            <input type="text" name="name" value={this.state.name} className="input is-primary is-small"
              onChange={(e) => this.handleNameInput(e)} />
          </div>
          <div>
            <label>Calories:</label>
            <input type="text" name="calories" value={this.state.calories} className="input is-primary is-small"
              onChange={(e) => this.handleCaloriesInput(e)} />
          </div>
          <div>
            <label>Image Url:</label>
            <input type="text" name="image" value={this.state.image} className="input is-primary is-small"
              onChange={(e) => this.handleImageInput(e)} />
          </div>

          <input type="submit" value="Submit" className="button **is-large is-success is-rounded**"
          />

        </form>
      </div>
    );
  }
}

export default AddFood;
