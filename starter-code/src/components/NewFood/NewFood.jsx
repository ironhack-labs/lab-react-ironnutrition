import React, { Component } from 'react';

class NewFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      calories: '',
      image: '',
      quantity: 0
    }
  }

  inputHandler(event) {
    const {name, value} = event.target;
    this.setState({
      [name]: value 
    })
  }
  
  formHandler(event) {
    event.preventDefault();
    let food = this.state;
    this.props.addFoodHandler(food);
    this.setState({
      name: '',
      calories: '',
      image: ''
    })
  }
  
  render() {
    return (
      <form onSubmit={(e) => this.formHandler(e)}>
        <p>
          <label htmlFor="name">Nome: </label>
          <input type="text" name="name" onChange={(e) => this.inputHandler(e)}/>
        </p>
        <p>
          <label htmlFor="calories">Calorias: </label>
          <input type="text" name="calories" onChange={(e) => this.inputHandler(e)}/>
        </p>
        <p>
          <label htmlFor="image">Imagem: </label>
          <input type="text" name="image" onChange={(e) => this.inputHandler(e)}/>
        </p>
        <p><input type="submit" value="Submit" /></p>
      </form>
    )
  }
}

export default NewFood;