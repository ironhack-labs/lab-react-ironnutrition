import React from 'react';
import Button from './Button';
import Input from './Input';

class FoodForm extends React.Component {
  state = {
    data: {
      name: '',
      calories: 0,
      image: '',
    },
    errors: {
      name: false,
      calories: false,
      image: false,
    },
  };

  handleChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      }
      
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    
    if(this.isFormValid()){
      this.props.onSubmit(this.state.data);

    }else{
      this.setState({
        errors: {
          name: !(!!this.state.data.name),
          calories: !(!!this.state.data.calories),
          image: !(!!this.state.data.image),
        }
      })
    }



    
  };

  isFormValid = () => {
    return Object.values(this.state.data).every((value) => value);
  }

  render() {
    // const isFormValid = this.isFormValid()

    return (
      <form onSubmit={this.onSubmit}>
        <Input
          name="name"
          placeholder="Food name"
          onChange={this.handleChange}
          value={this.state.data.name}
          error={this.state.errors.name && 'Campo requerido'}
        />

        <Input
          name="calories"
          placeholder="Calories"
          type="number"
          onChange={this.handleChange}
          value={this.state.data.calories}
          error={this.state.errors.calories && 'Mayor que 0'}
        />

        <Input
          name="image"
          placeholder="Image url"
          onChange={this.handleChange}
          value={this.state.data.image}
          error={this.state.errors.image && 'Campo requerido'}
        />

        <Button >Add new Food</Button>
      </form>
    );
  }
}

export default FoodForm;
