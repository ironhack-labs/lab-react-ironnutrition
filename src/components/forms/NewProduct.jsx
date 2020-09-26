import React from 'react';
import FormNewProduct from './FormNewProduct';

export default class NewProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {foods: props.foods, value: false};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState(state => ({
      value: !state.value
    }))
  }

  render() {
    return (
      <div className="formAddProduct">
        <button onClick={this.handleChange} className={!this.state.value ? 'button is-primary my-3' : 'button is-danger my-3' }>{!this.state.value ? '+ Add new food' : 'X Close' }</button>
        {this.state.value && 
          <div className="container">
            <h1 className="title">New product</h1>
            <FormNewProduct foods={this.state.foods}/>
          </div>
        }
      </div>
    );
  }
}
