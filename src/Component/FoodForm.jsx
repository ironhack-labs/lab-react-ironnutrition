import React, { PureComponent } from 'react';

export class FoodForm extends PureComponent {
  state = {
    name: "",
    calories: "",
    image: "",
    quantity: ""
  }

  handleNameChge = (evt) => {
    const value = evt.target.value;
    this.setState({ name: value });
  };

  handleCalChge = (evt) => {
    const value = evt.target.value;
    this.setState({ calories: value });
  };

  handleImgChge = (evt) => {
    const value = evt.target.value;
    this.setState({ image: value });
  };

  handleQutChge = (evt) => {
    const value = evt.target.value;
    this.setState({ quantity: value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    // this.props.addFood({
    //     name: this.state.name,
    //     calories: this.state.calories,
    //     quantity: this.state.quantity,
    //     image: this.state.image
    //   });

  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" ref={this.inputRef} name="name" value={this.state.name} onChange={this.handleNameChge} />
          </div>
          <div>
            <label htmlFor="calories">Calories</label>
            <input type="number" name="calories" value={this.state.calories} onChange={this.handleCalChge} />
          </div>
          <div>
            <label htmlFor="image">Image</label>
            <input type="file" name="image" value={this.state.image} onChange={this.handleImgChge}/>
          </div>
          <div>
            <label htmlFor="quantity">Quantity</label>
            <input type="number" name="quantity" value={this.state.quantity} onChange={this.handleQutChge}/>
          </div>
          <div>
            <button>Send</button>
          </div>
        </form>
      </div>
    );
  }
}

export default FoodForm;
