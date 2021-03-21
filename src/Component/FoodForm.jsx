import React, { PureComponent } from 'react';

export class FoodForm extends PureComponent {
  state = {
    name: '',
    calories: 0,
    image: '',
    // quantity: '',
    isDisplayed: false,
  };

  handleDisplayForm = (evt) => {
    this.setState({ isDisplayed: !this.state.isDisplayed });
  };


  handleInput = (evt) => {
    this.setState({[evt.target.name]: evt.target.value})
  }



  // handleNameChge = (evt) => {
  //   const value = evt.target.value;
  //   this.setState({ name: value });
  // };

  // handleCalChge = (evt) => {
  //   const value = evt.target.value;
  //   this.setState({ calories: value });
  // };

  // handleImgChge = (evt) => {
  //   const value = evt.target.value;
  //   this.setState({ image: value });
  // };

  // handleQutChge = (evt) => {
  //   const value = evt.target.value;
  //   this.setState({ quantity: value });
  // };

  handleSubmit = (evt) => {
    evt.preventDefault();

    this.props.addFood({
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleDisplayForm}>Add</button>

        {(this.state.isDisplayed) && (
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                ref={this.inputRef}
                name="name"
                value={this.state.name}
                onChange={this.handleInput}
                // onChange={this.handleNameChge}
              />
            </div>
            <div>
              <label htmlFor="calories">Calories</label>
              <input
                type="number"
                name="calories"
                value={this.state.calories}
                onChange={this.handleInput}
                // onChange={this.handleCalChge}
              />
            </div>
            <div>
              <label htmlFor="image">Image</label>
              <input
                type="text"
                name="image"
                value={this.state.image}
                onChange={this.handleInput}

                // onChange={this.handleImgChge}
              />
            </div>
            {/* <div>
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                name="quantity"
                value={this.state.quantity}
                // onChange={this.handleQutChge}
              />
            </div> */}
            <div>
              <button>Send</button>
            </div>
          </form>
        )}
      </div>
    );
  }
}

export default FoodForm;
