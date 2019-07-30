import React, {Component} from 'react';

class Form extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      calories: 0,
      image: '',
      quantity: 0,
    };
  }

  fillState(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  formHandler(event) {
    event.preventDefault();
    this.props.submitMethod(this.state);
    this.setState({
        name: '',
        calories: 0,
        image: '',
        quantity: 0,
    });
  }

  render(){ 

    return(
      <form onSubmit={(e) => this.formHandler(e)}>
        <input onChange={(e) => this.fillState(e)} type="text" name="name" placeholder="Name" value={this.state.name}/>
        <input onChange={(e) => this.fillState(e)} type="number" name="calories" placeholder="Calories" value={this.state.calories}/>
        <input onChange={(e) => this.fillState(e)} type="text" name="image" placeholder="Image link" value={this.state.image}/>
  
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;