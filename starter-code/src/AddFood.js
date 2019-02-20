import React, { Component } from "react";

class AddFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image: "",
      calories: 0,
      quantity: 0
    };
  }
  genericOnChange(event) {
    const { value, name } = event.target;
    console.log(event.target);

    // value is the text inside the <input> tag
    // name is the <input> tag's name attribute {"title, "director", etc}
    //example : image that name = "director"
    //use the variable "[name]" to set the key of the object
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    // prevent the default page refresh you get when you submit a form
    event.preventDefault();
    // const oldFilter = this.props.displayAddFood;
    // this.setState({ displayAddFood: !oldFilter });
    console.log("saving a new food ", this.state);
    //save the new movie info (thi.state) in the arry
    // (movieSubmit is the method PROP ent to us by movieList)
    this.props.foodSubmit(this.state);
    //clear the form by setting the state bak to initial values
    // (remember to use setState)
    this.setState({
      name: "",
      calories: 0,
      image: "",
      quantity: 0
    });
  }

  render() {
    return (
      <form
        onSubmit={event => {
          this.handleSubmit(event);
        }}
      >
        {" "}
        <label>
          Name :{" "}
          <input
            onChange={event => {
              this.genericOnChange(event);
            }}
            value={this.state.name}
            type="text"
            name="name"
            placeholder="food"
          />
        </label>{" "}
        <label>
          Calories :{" "}
          <input
            onChange={event => this.genericOnChange(event)}
            value={this.state.calories}
            type="number"
            name="calories"
            placeholder="0"
          />
        </label>{" "}
        <label>
          Image :{" "}
          <input
            onChange={event => this.genericOnChange(event)}
            value={this.state.image}
            type="text"
            name="image"
            placeholder="imageURL"
          />
        </label>{" "}
        <label>
          Quantity :{" "}
          <input
            onChange={event => this.genericOnChange(event)}
            value={this.state.quantity}
            type="number"
            name="quantity"
            placeholder="0"
          />
        </label>{" "}
        <button>Save Food</button>
      </form>
    );
  }
}

export default AddFood;
