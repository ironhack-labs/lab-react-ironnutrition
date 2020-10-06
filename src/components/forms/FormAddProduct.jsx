import React from 'react';

class FormAddProduct extends React.Component {
  state = {
    value: 1,
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.food.quantity = Number(this.state.value);
    this.props.addFoodMenu(this.props.food);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input
              type="number"
              className="input"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <div className="control">
            <button className="button is-info" type="submit" value="Submit">
              +
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default FormAddProduct;
