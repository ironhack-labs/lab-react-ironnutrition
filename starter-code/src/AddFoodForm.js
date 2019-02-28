import React from 'react';

export default class AddFoodForm extends React.Component {
    state = {
        foodName: '',
        url:'',
        calories:''
    }
  
    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
        [name]: value
        });
    }
  
    handleSubmit = (event) => {
      event.preventDefault();
      const { onSubmit } = this.props;
      const { foodName, url, calories } = this.state;
      onSubmit(foodName, url, calories);
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="foodName" value={this.state.foodName} onChange={this.handleChange} />
          </label>

          <label>
            Image url:
            <input type="text" name="url" value={this.state.url} onChange={this.handleChange} />
          </label>

          <label>
            calories:
            <input type="text" name="calories" value={this.state.calories} onChange={this.handleChange} />
          </label>

          <input type="submit" value="Submit" />
        </form>
      );
    }
  }